"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import axios from "axios";
import { useState, useEffect } from "react";

const Scroll = () => {
  const [post, setPost] = useState({
    id: 22577,
    title: "مقولة",
    body: "من قال لأخيه «ادع لي» كان هو وأخوه من المتعاونين على البر والتقوى.\r\n\r\n- ابن تيمية",
    author: {
      id: 11340,
      profile_image:
        "http://tarmeezacademy.com/images/users/PJUaA4J1fAIT0FS.jpg",
      is_fake: 0,
      username: "ouais.abdullah.ye",
      name: "أويس الهتار",
      email: "ouis@gmail.com",
      email_verified_at: null,
      remember_token: null,
      created_at: "2024-06-07T23:46:17.000000Z",
      updated_at: "2024-06-07T23:46:17.000000Z",
    },
    image: "http://tarmeezacademy.com/images/posts/KjB0TX9ZbTHpYaK.jpg",
    tags: [],
    created_at: "2 hours ago",
    comments_count: 1,
  });
  const geting = async () => {
    const respons = await axios.get(`https://tarmeezacademy.com/api/v1/posts`);
    const posts = respons.data.data;
    setPost(posts[10]);
    console.log(posts);
  };
  useEffect(() => {
    geting();
  }, []);

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
        <div className="flex grow justify-end mr-3">
          <button
            type="button"
            className="duration-500 text-xs text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-3 py-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>
          <button
            type="button"
            className="duration-500 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xm px-3 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
        </div>
      </div>

      <div className="posts">
        <div className=" post bg-gray-900 pb-3 rounded-lg">
          <div className="mt-5 pt-5 ">
            <div className="flex items-center ">
              <div className="image ml-5 mr-3 rounded-full w-12 h-12 flex justify-center items-center ">
                <Image
                  className="rounded-full"
                  src={post.author.profile_image}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <h2>{post.author.name}</h2>
              <div className="flex grow justify-end mr-3">+</div>
            </div>
            <p className="ml-5 mt-4">{post.body}</p>
            <div className=" px-5 mt-2 ">
              <Image
                src={post.image}
                alt="Picture of the author"
                width={1000}
                height={500}
              />
            </div>
            <div className="pl-5">
              <h2 className="text-xs text-slate-400">{post.created_at}</h2>
              <div className="flex mt-2 ">
                <div className="flex">
                  <AiOutlineLike size={20} /> <h2 className="ml-2">16</h2>
                </div>
                <div className=" flex ml-6 justify-center items-center">
                  <GoComment size={20} />{" "}
                  <h2 className="ml-2">{post.comments_count}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" post bg-gray-900 pb-3 rounded-lg">
          <div className="mt-5 pt-5 ">
            <div className="flex items-center ">
              <div className="image ml-5 mr-3 rounded-full w-12 h-12 flex justify-center items-center ">
                <Image
                  className="rounded-full"
                  src={post.author.profile_image}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <h2>{post.author.name}</h2>
              <div className="flex grow justify-end mr-3">+</div>
            </div>
            <p className="ml-5 mt-4">{post.body}</p>
            <div className=" px-5 mt-2 ">
              <Image
                src={post.image}
                alt="Picture of the author"
                width={1000}
                height={500}
              />
            </div>
            <div className="pl-5">
              <h2 className="text-xs text-slate-400">{post.created_at}</h2>
              <div className="flex mt-2 ">
                <div className="flex">
                  <AiOutlineLike size={20} /> <h2 className="ml-2">16</h2>
                </div>
                <div className=" flex ml-6 justify-center items-center">
                  <GoComment size={20} />{" "}
                  <h2 className="ml-2">{post.comments_count}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post bg-gray-900 pb-3 rounded-lg">
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
                src="/image/Screenshot (7).png"
                alt="Picture of the author"
                width={1000}
                height={500}
              />
            </div>
            <div className="pl-5">
              <h2 className="text-xs text-slate-400">2 min ago</h2>
              <div className="flex mt-2 ">
                <div className="flex">
                  <AiOutlineLike size={20} /> <h2 className="ml-2">16</h2>
                </div>
                <div className=" flex ml-6 justify-center items-center">
                  <GoComment size={20} /> <h2 className="ml-2">10</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
