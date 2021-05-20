import { createContext, useContext, useReducer, useState } from "react";
import { io } from "socket.io-client";

export const MultiplayerContext = createContext(null);
const socket = io("http://localhost:4000/");

export function MultiplayerProvider({ children }) {
  const [waitingRoom, setWaitingRoom] = useState({
    waiting: false,
    multiplayerGameArea: false,
  });
  const [roomSizeMultiplayer,setRoomSizeMultiplayer] = useState();
  const [participants, setParticipants] = useState([]);
  const [leaderBoard, setLeaderBoard] = useState({
    status: false,
    leaderBoardData: [],
  });

  return (
    <MultiplayerContext.Provider
      value={{
        waitingRoom,
        setParticipants,
        setWaitingRoom,
        participants,
        socket,
        leaderBoard,
        setLeaderBoard,
        roomSizeMultiplayer,
        setRoomSizeMultiplayer,
      }}
    >
      {children}
    </MultiplayerContext.Provider>
  );
}

export function useMultiplayer() {
  return useContext(MultiplayerContext);
}
