"use client";
import React from "react";
import { useSnapshot } from "valtio";
import { state } from "./valtio/state";
import Link from "next/link";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  const snap = useSnapshot(state);
  return (
    <div className="bg-blue-400 h-screen w-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold">Player Count</h2>
      <div className="flex justify-center items-center gap-8">
        <Link
          href="/main"
          onClick={() => {
            state.playerCount = 1;
          }}
          className="bg-gray-200 p-8 rounded-lg shadow-md hover:bg-gray-300"
        >
          1
        </Link>
        <Link
          href="/main"
          onClick={() => {
            state.playerCount = 2;
          }}
          className="bg-gray-200 p-8 rounded-lg shadow-md hover:bg-gray-300"
        >
          2
        </Link>
        <Link
          href="/main"
          onClick={() => {
            state.playerCount = 4;
          }}
          className="bg-gray-200 p-8 rounded-lg shadow-md hover:bg-gray-300"
        >
          3
        </Link>
        <Link
          href="/main"
          onClick={() => {
            state.playerCount = 4;
          }}
          className="bg-gray-200 p-8 rounded-lg shadow-md hover:bg-gray-300"
        >
          4
        </Link>
      </div>
    </div>
  );
};
export default page;
