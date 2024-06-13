import React from "react";
import Image from "next/image";
import styles from "./scroll.css";
const Scroll = () => {
  return (
    <div className="  w-2/4 pt-5 px-5 h-screen">
      <div className="addPost flex  items-center bg-gray-900 rounded-3xl py-2">
        <div className="image ml-5 mr-10 rounded-full w-12 h-12 flex justify-center items-center ">
          <Image
            src="/image/avatar.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <h2>Add Post</h2>
        <h1 className=" ml-2 bg-blue-700 rounded-full w-8 h-8 flex justify-center items-center ">
          +
        </h1>
      </div>

      <div className="bg-gray-900">
        <div className="mt-5 pt-5 ">
          <div className="flex items-center ">
            <div className="image ml-5 mr-3 rounded-full w-12 h-12 flex justify-center items-center ">
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
          <p className="ml-5 mt-4">Hello I'm mohamed omran</p>
          <div className=" px-5 mt-2 ">
            <Image
              src="/image/photo.png"
              alt="Picture of the author"
              width={1000}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
