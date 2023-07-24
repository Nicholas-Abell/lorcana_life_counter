"use client";
import React from "react";
import { FcRefresh } from "react-icons/fc";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="absolute w-full left-0 top-[50vh] flex justify-center items-center z-20">
      <div className="w-20 flex items-center justify-center">
        <FcRefresh onclick={() => {}} size={25} />
      </div>
    </div>
  );
};
export default Navbar;
