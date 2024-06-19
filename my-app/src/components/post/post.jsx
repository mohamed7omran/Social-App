import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Post = ({ profileImage, name, body, image, created, commentsCount }) => {
  const imgRef = useRef();
  return (
    <div className=" post bg-gray-900 pb-3 rounded-lg">
      <div className="mt-5 pt-5 ">
        <div className="flex items-center ">
          <div className="image ml-5 mr-3 rounded-full w-12 h-12 flex justify-center items-center ">
            <Image
              className="rounded-full"
              src={profileImage}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <h2>{name}</h2>
          <div className="flex grow justify-end mr-3">+</div>
        </div>
        <p className="ml-5 mt-4">{body}</p>
        <div ref={imgRef} className=" px-5 mt-2 ">
          <Image src={image} width={1000} height={500} />
        </div>
        <div className="pl-5">
          <h2 className="text-xs text-slate-400">{created}</h2>
          <div className="flex mt-2 ">
            <div className="flex">
              <AiOutlineLike size={20} /> <h2 className="ml-2">16</h2>
            </div>
            <div className=" flex ml-6 justify-center items-center">
              <GoComment size={20} /> <h2 className="ml-2">{commentsCount}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
