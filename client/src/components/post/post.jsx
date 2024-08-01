import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IoIosPersonAdd } from "react-icons/io";

const Post = ({ profileImage, name, body, created, commentsCount, image }) => {
  return (
    <div className="post bg-gray-900 pb-3 rounded-lg">
      <div className="mt-5 pt-5">
        <div className="flex items-center">
          <div className="image ml-5 mr-3 overflow-hidden rounded-full w-12 h-12 flex justify-center items-center">
            <Image
              className="rounded-full"
              src={profileImage || "/image/default-avatar.webp"} // Fallback image
              width={48} // Adjust width
              height={48} // Adjust height
              alt="Profile image"
            />
          </div>
          <h2 className="text-white">{name}</h2>
          <div className="cursor-pointer flex grow justify-end mr-5">
            <IoIosPersonAdd size={23} />
          </div>
        </div>
        <p className="ml-5 mt-4 text-white">{body}</p>
        {image && (
          <div className="px-5 mt-2">
            <Image
              src={image}
              width={1000} // Adjust dimensions
              height={500}
              alt="Post image"
            />
          </div>
        )}
        <div className="pl-5">
          <h2 className="text-xs text-slate-400">{created}</h2>
          <div className="flex mt-2">
            <div className="flex items-center">
              <AiOutlineLike size={20} />{" "}
              <h2 className="ml-2 text-white">16</h2>
            </div>
            <div className="flex ml-6 justify-center items-center">
              <Link href="/homePage/comments">
                <GoComment size={20} />
                <h2 className="ml-2 text-white">{commentsCount}</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
