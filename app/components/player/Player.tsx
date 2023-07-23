"use client";
import React, { useState } from "react";

type PlayerProps = {};

const Player: React.FC<PlayerProps> = () => {
  const [lore, setLore] = useState(0);
  const [playerName, setPlayerName] = useState("");
  return (
    <div className="bg-blue-400 w-full h-full border-gray-600 border-2">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <h3>{playerName ? playerName : "Player 1"}</h3>
        <p>{lore}</p>
      </div>
    </div>
  );
};
export default Player;
