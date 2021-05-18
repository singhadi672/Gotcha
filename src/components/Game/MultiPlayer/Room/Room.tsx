import React, { useRef } from "react";
import { GameData } from "../../../../data/cardDetails";

import { v4 as uuidv4 } from "uuid";
import "./room.css";

import { useMultiplayer } from "../../../../contexts/multiplayer-context";

export default function Room({ accentPrimary, accentSecondary }: any) {
  const createRoomInputRef = useRef(null);
  const roomIdInputRef = useRef(null);
  const joinRoomInputRef = useRef(null);
  const { setWaitingRoom, waitingRoom, socket } = useMultiplayer();

  function createRoom(e) {
    e.preventDefault();
    const roomId = uuidv4();
    const participant = {
      roomId,
      username: createRoomInputRef.current.value,
      userId: socket.id,
      roomCreator: true,
      totalScore: 0,
      isAnswered: false,
    };
    socket.emit("create_room", participant);
    setWaitingRoom({ ...waitingRoom, waiting: true });
  }

  function joinRoom(e) {
    e.preventDefault();
    const participant = {
      roomId: roomIdInputRef.current.value,
      username: joinRoomInputRef.current.value,
      userId: socket.id,
      roomCreator: false,
      totalScore: 0,
      isAnswered: false,
    };
    socket.emit("join_room", participant);
    setWaitingRoom({ ...waitingRoom, waiting: true });
  }

  return (
    <div className="room-main">
      <div className="room-card" style={{ background: accentPrimary }}>
        <section
          className="card card-left"
          style={{ borderRight: `0.2rem solid ${accentSecondary}` }}
        >
          <h1>Create Room</h1>
          <form action="">
            <div className="username">
              <h3>Please Enter Your Name</h3>
              <input
                type="text"
                name="username-create"
                id=""
                required
                maxLength={25}
                ref={createRoomInputRef}
              />
            </div>
            <div className="room-limit">
              <h3>Please select Room Size</h3>
              <div className="room-length">
                <div className="radio-sec">
                  <input type="radio" name="room" id="two" />
                  <label htmlFor="two">2</label>
                </div>
                <div className="radio-sec">
                  <input type="radio" name="room" id="three" />
                  <label htmlFor="three">3</label>
                </div>
              </div>
            </div>
            <button
              style={{ background: accentSecondary }}
              onClick={(e) => createRoom(e)}
            >
              Create Room
            </button>
          </form>
        </section>
        <section className="card card-right">
          <h1>Join Room</h1>
          <form action="">
            <div className="username">
              <h3>Please Enter Your Name</h3>
              <input
                type="text"
                name="username-join"
                id=""
                required
                maxLength={25}
                ref={joinRoomInputRef}
              />
            </div>
            <div className="join-room">
              <h3>Please Enter room Id</h3>
              <input
                type="text"
                name="room-id"
                id=""
                required
                ref={roomIdInputRef}
              />
            </div>
            <button
              style={{ background: accentSecondary }}
              onClick={(e) => joinRoom(e)}
            >
              Join Room
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
