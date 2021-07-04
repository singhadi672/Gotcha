import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./room.css";

import { useMultiplayer } from "../../../../contexts/multiplayer-context";

export default function Room({ accentPrimary, accentSecondary }: any) {
  const createRoomInputRef = useRef(null);
  const roomIdInputRef = useRef(null);
  const joinRoomInputRef = useRef(null);
  const [controlRoom, setControlRoom] = useState({
    create: false,
    roomId: "",
    join: false,
  });
  const [roomSizeInput, setRoomSizeInput] = useState(null);
  const { setWaitingRoom, waitingRoom, socket } = useMultiplayer();

  function createRoom(e) {
    e.preventDefault();
    if (createRoomInputRef.current.value && roomSizeInput) {
      const roomId = uuidv4();
      const participant = {
        roomId,
        username: createRoomInputRef.current.value,
        roomSize: roomSizeInput,
        userId: socket.id,
        roomCreator: true,
        totalScore: 0,
        isAnswered: false,
      };
      socket.emit("create_room", participant);
      socket.on("resource_created", (data) => {
        if (data.status) {
          setWaitingRoom({ ...waitingRoom, waiting: true });
        } else {
          setControlRoom({ ...controlRoom, create: true, roomId: data.roomId });
        }
      });
    }
  }

  function joinRoom(e) {
    e.preventDefault();
    if (joinRoomInputRef.current.value && roomIdInputRef.current.value) {
      const participant = {
        roomId: roomIdInputRef.current.value,
        username: joinRoomInputRef.current.value,
        userId: socket.id,
        roomCreator: false,
        totalScore: 0,
        isAnswered: false,
      };
      socket.emit("join_room", participant);
      socket.on("room_size_max", (data) => {
        if (data.status) {
          setWaitingRoom({ ...waitingRoom, waiting: true });
        } else {
          setControlRoom({ ...controlRoom, join: true });
        }
      });
    }
  }

  return (
    <div className="room-main">
      <div className="room-card" style={{ background: accentPrimary }}>
        <section className="card card-left">
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
                  <input
                    type="radio"
                    name="room"
                    id="two"
                    onClick={() => setRoomSizeInput(2)}
                  />
                  <label htmlFor="two">2</label>
                </div>
                <div className="radio-sec">
                  <input
                    type="radio"
                    name="room"
                    id="three"
                    onClick={() => setRoomSizeInput(3)}
                  />
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
            {controlRoom.create && (
              <small>The room is created already : {controlRoom.roomId}</small>
            )}
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
              style={{
                background: accentSecondary,
              }}
              onClick={(e) => joinRoom(e)}
            >
              Join Room
            </button>
            {controlRoom.join && <small>max size reached!</small>}
          </form>
        </section>
      </div>
      <button
        onClick={() => socket.emit("delete_room")}
        style={{ background: "tomato", marginTop: "1rem" }}
      >
        Delete exsisting room
      </button>
    </div>
  );
}
