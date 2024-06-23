"use client";
import React from "react";
import Profile from "../../components/profileSection/profile";
import Scroll from "../../components/scroll/scroll";
import AddPost from "../../components/addPost/addPost";
import Friends from "../../components/friendsSection/friends";
import { FaArrowUp } from "react-icons/fa";

import { useState } from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="up" className=" container mx-auto px-12   ">
      <div className="flex justify-between  ">
        <AddPost></AddPost>
        <Profile></Profile>
        <Scroll></Scroll>
        <Friends></Friends>
        <Link href="#up">
          <button
            type="button"
            className="duration-500 fixed bottom-10 right-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <FaArrowUp />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
