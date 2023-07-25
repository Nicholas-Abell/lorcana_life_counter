"use client";
import React, { useState } from "react";

type PlayerProps = {
  playerNumber: number;
};

const Player: React.FC<PlayerProps> = ({ playerNumber }) => {
  const [lore, setLore] = useState(0);

  const loreCountHandler = (x: number) => {
    if (lore + x < 0 || lore + x > 20) return;
    setLore((lore) => lore + x);
  };

  return (
    <div className="bg-blue-400 w-full h-full border-gray-600 border-2 relative">
      <button
        onClick={() => {
          loreCountHandler(-1);
        }}
        className="absolute top-0 left-0 h-full w-[50%] z-10 flex justify-center items-center text-4xl font-bold hover:bg-blue-300/30 cursor-pointer"
      >
        -
      </button>
      <div className="h-full w-full flex flex-col justify-center items-center gap-4">
        <input
          type="text"
          placeholder={`Player ${playerNumber + 1}`}
          className="text-center placeholder-black z-20"
        />
        <p>{lore}</p>
      </div>
      <button
        onClick={() => {
          loreCountHandler(1);
        }}
        className="absolute top-0 right-0 h-full w-[50%] z-10 flex justify-center items-center text-4xl font-bold hover:bg-blue-300/30 cursor-pointer"
      >
        +
      </button>
    </div>
  );
};
export default Player;
