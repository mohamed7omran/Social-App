import React from "react";
import Image from "next/image";

const Friends = () => {
  return (
    <div className=" bg-gray-900 h-80 w-1/5 pt-5 mt-5">
      <h1 className="ml-5 mb-3">Friend List</h1>
      <div className="flex mb-3 items-center ">
        <div className="image  ml-5 mr-3 rounded-full w-12 h-12 flex justify-center items-center ">
          <Image
            src="/image/avatar.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <h2>M.Omran</h2>
        <div className="flex grow justify-end mr-3">+</div>
      </div>
      <div className="flex mb-3 items-center ">
        <div className="image  ml-5 mr-3 rounded-full w-12 h-12 flex justify-center items-center ">
          <Image
            src="/image/avatar.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <h2>M.Omran</h2>
        <div className="flex grow justify-end mr-3">+</div>
      </div>
    </div>
  );
};

export default Friends;
