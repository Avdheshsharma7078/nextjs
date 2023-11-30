"use client";
import Link from "next/link";
import React from "react";

const CustomNavbar = () => {
  return (
    <nav className="bg-blue-950 h-16 py-2 px-36 flex justify-between items-center">
      <div className="brand">
      <h2 className="text-2xl font-semibold">
        <a href="#!">Work Manager</a>
      </h2>
      </div>
      <div>
        <ul className="flex space-x-5">
          <li><Link href={"/"} className="hover:text-blue-500">Home</Link></li>
          <li><Link href="/add-task" className="hover:text-blue-500">Add Task</Link></li>
          <li><Link href="/show-tasks" className="hover:text-blue-500">Show Tasks</Link></li>
        </ul>
      </div>
      <div>
      <ul className="flex space-x-5">
        <li><a href="">Login</a></li>
        <li><a href="">Signup</a></li>
     
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
