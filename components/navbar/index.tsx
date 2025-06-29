import React from "react";
import { ModeToggle } from "../toggle";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex items-center justify-between gap-5 w-[95%] m-auto py-5 ">
        <div className="flex items-center justify-center gap-5 font-[600]">
          <h5 className="cursor-pointer">Docs</h5>
          <h5 className="cursor-pointer">Components</h5>
          <h5 className="cursor-pointer">Blocks</h5>
          <h5 className="cursor-pointer">Charts</h5>
          <h5 className="cursor-pointer">Themes</h5>
          <h5 className="cursor-pointer">Colors</h5>   
        </div>
        <div className="flex items-center justify-center gap-5 ">
            <span className="relative flex ">
                <Input type="text" placeholder="Search documentation..." className="bg-gray-100 border-none p-3 pr-20 rounded-md" />
                <Button variant={"outline"} className="absolute text-gray-600  dark:text-gray-400 bg-white right-10 top-2.5 w-1 h-1 rounded-sm">Ctrl</Button>
                <Button variant={"outline"} className="absolute  text-gray-600 dark:text-gray-400 bg-white right-1 top-2.5 w-1 h-1 rounded-sm">K</Button>
            </span>
            <span className="flex items-center gap-0.5 border-r-1 border-l-1 px-5"><FaGithub />89.7k</span>
            <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
