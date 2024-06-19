"use client";
import React from "react";
import Profile from "../../components/profilePage/profile";
import Scroll from "../../components/scroll/scroll";
import AddPost from "../../components/addPost/addPost";
import Friends from "../../components/friendsPage/friends";
import { useState } from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto px-12   ">
      <div className="flex justify-between  ">
        <AddPost></AddPost>
        <Profile></Profile>
        <Scroll></Scroll>
        <Friends></Friends>
      </div>
    </div>
  );
};

export default HomePage;
