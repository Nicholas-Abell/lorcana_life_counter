"use client";
import { useState } from "react";
import { useSnapshot } from "valtio";
import Player from "../components/player/Player";
import { state } from "../va;tio/state";

export default function Home() {
  const snap = useSnapshot(state);
  return (
    <main
      className={
        snap.playerCount > 2
          ? `grid grid-cols-2 w-screen h-screen`
          : `grid grid-rows-2 w-screen h-screen`
      }
    >
      {[...Array(snap.playerCount)].map((player) => (
        <Player />
      ))}
    </main>
  );
}
