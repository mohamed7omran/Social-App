import React from "react";
import Profile from "../../../components/profileSection/profile";
import Scroll from "../../../components/scroll/scroll";
import AddPost from "../../../components/addPost/addPost";
import Image from "next/image";
import Friends from "../../../components/friendsSection/friends";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
const ProfilePage = () => {
  return (
    <div className=" container mx-auto px-36">
      <div className="flex justify-center">
        <div className="mr-7 ">
          <div className="w-full">
            <Profile></Profile>
          </div>
          <div>
            <Friends></Friends>
          </div>
        </div>
        <AddPost></AddPost>
        <Scroll></Scroll>
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

export default ProfilePage;
