"use client";
import React from "react";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Post from "../../components/post/post";
import Link from "next/link";

const Scroll = () => {
  const [post, setPost] = useState([
    {
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
    },
  ]);
  // const { ref, inView } = useInView();
  // const [currentPage, setCurrentPage] = useState();
  const geting = async () => {
    const respons = await axios.get(
      `https://tarmeezacademy.com/api/v1/posts?limit=20`
    );
    const posts = respons.data.data;
    // const lastPage = respons.data.meta.last_page;
    console.log(posts);
    setPost((oldPost) => oldPost.concat(posts));
  };

  useEffect(() => {
    geting();
  }, []);

  // useEffect(() => {
  //   if (inView) {
  //     const inc = () => {
  //       setCurrentPage(currentPage + 1);
  //     };
  //     geting(currentPage);
  //     console.log(currentPage);
  //   }
  // }, [inView]);

  return (
    <div className="  w-2/4 pt-5 px-5 h-screen">
      <div className="addPost flex  items-center bg-gray-900 rounded-3xl py-2">
        <div className="image ml-5 mr-10 rounded-full w-12 h-12 flex justify-center items-center ">
          <Image src="/image/avatar.png" width={500} height={500} />
        </div>
        <h1>Add Post</h1>
        <Link
          href={"/addPostPage"}
          className=" ml-2 bg-blue-700 rounded-full w-8 h-8 flex justify-center items-center "
        >
          +
        </Link>
        <div className="flex grow justify-end mr-3">
          <Link
            href={"/signUp"}
            className="duration-500 text-sm text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-2 py-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Sign Up
          </Link>
          <Link
            href={"/login"}
            className="duration-500 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="posts">
        {post.map((ele, id) => (
          <Post
            key={id}
            commentsCount={ele.comments_count}
            profileImage={
              Object.keys(ele.image).length == 0
                ? "/image/default-avatar.webp"
                : ele.author.profile_image
            }
            image={
              Object.keys(ele.image).length == 0
                ? "/image/photo.png"
                : ele.image
            }
            name={ele.author.name}
            body={ele.body}
            created={ele.created_at}
          ></Post>
        ))}
        {/* <div ref={ref}></div> */}
      </div>
    </div>
  );
};

export default Scroll;
