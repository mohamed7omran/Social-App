import React from "react";
import Profile from "../../components/profilePage/profile";
import Scroll from "../../components/scroll/scroll";
import Friends from "../../components/friendsPage/friends";
const HomePage = () => {
  return (
    <div className="container mx-auto px-12 text-center ">
      <div className="mainSection grid gap-4 grid-cols-3 ">
        <Profile></Profile>
        <Scroll></Scroll>
        <Friends></Friends>
      </div>
    </div>
  );
};

export default HomePage;
