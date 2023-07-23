"use client";
import { useState } from "react";
import Player from "./components/player/Player";

export default function Home() {
  const [playerCount, setPlayerCount] = useState(3);
  return (
    <main
      className={
        playerCount > 2
          ? `grid grid-cols-2 w-screen h-screen`
          : `grid grid-rows-2 w-screen h-screen`
      }
    >
      {[...Array(playerCount)].map((player) => (
        <Player />
      ))}
    </main>
  );
}
