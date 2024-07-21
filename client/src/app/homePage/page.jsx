"use client";
import React from "react";
import Profile from "../../components/profileSection/profile";
import Scroll from "../../components/scroll/scroll";
import AddPost from "../../components/addPost/addPost";
import Friends from "../../components/friendsSection/friends";
import Header from "../../components/header/header";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "../router/index";
import { useState } from "react";

const HomePage = () => {
  return (
    <div id="up" className=" container mx-auto px-12   ">
      <div className="flex justify-between  ">
        <AddPost></AddPost>
        <div className=" cursor-pointer w-1/5 mt-24">
          <Profile></Profile>
        </div>
        <div className="w-2/4">
          <Header></Header>
          {/* <Provider store={store}> */}
          <Scroll></Scroll>
          {/* </Provider> */}
        </div>
        <div className="h-80 mt-20 w-1/4">
          <Friends></Friends>
        </div>
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
