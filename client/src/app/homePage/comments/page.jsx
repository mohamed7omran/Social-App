"use client";
import React, { useRef } from "react";
import Post from "../../../components/post/post";
import axios from "axios";
import Link from "next/link";
import Comment from "../../../components/comment/comment";
import { FaArrowUp } from "react-icons/fa";

import { useState, useEffect } from "react";
const Comments = () => {
  const [comment, setComment] = useState([
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
    },
  ]);
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
  const [author, setAuthor] = useState([
    {
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
  ]);
  const getComment = useRef();

  const getting = async () => {
    const respons = await axios.get(
      `https://tarmeezacademy.com/api/v1/posts/1`
    );
    const post = respons.data.data;
    const author = respons.data.data.author;
    const comments = respons.data.data.comments;
    setPost(post);
    setAuthor(author);
    setComment(comments);
  };
  useEffect(() => {
    getting();
  }, []);

  const createComment = () => {
    let userComment = getComment.current.value;
    console.log(userComment);
    getComment.current.value = "";
    //   const url = `https://tarmeezacademy.com/api/v1/posts/${id}/comments`;
    //   const params = {
    //     body: userComment,
    //   };
    //   let token = localStorage.getItem("token");
    //   axios
    //     .post(url, params, {
    //       headers: { authorization: `Bearer ${token}` },
    //     })
    //     .then((response) => {
    //       getting();
    //     })
    //     .catch((error) => {
    //       const errorMessage = error.response.data.message;
    //       alert(errorMessage);
    //     });
  };

  return (
    <div id="up" className="container mx-auto px-64">
      <Post
        commentsCount={post.comments_count}
        profileImage={
          author.profile_image && Object.keys(author.profile_image).length > 0
            ? author.profile_image
            : "/image/default-avatar.webp"
        }
        body={post.body}
        image={post.image == "" ? "/image/photo.png" : post.image}
        name={author.name}
        created={post.created_at}
      />
      <div className="my-2 relative">
        <input
          ref={getComment}
          placeholder="Comment..."
          type="text"
          id="default-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
        <button
          onClick={createComment}
          class="absolute bottom-0 right-0 outline-2 h-full bg-gray-300 hover:bg-gray-400 text-gray-800 text-base font-semibold px-2  rounded-r-lg inline-flex items-center"
        >
          Send
        </button>
      </div>
      <div className="pb-4">
        {comment.map((ele, id) => (
          <Comment
            key={id}
            img={
              ele.author.profile_image &&
              Object.keys(ele.author.profile_image).length > 0
                ? ele.author.profile_image
                : "/image/default-avatar.webp"
            }
            name={ele.author.name}
            body={ele.body}
          />
        ))}
      </div>
      <Link href="#up">
        <button
          type="button"
          className="duration-500 fixed bottom-10 right-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-larg rounded-full text-lg px-5 py-5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          <FaArrowUp />
        </button>
      </Link>
    </div>
  );
};
export default Comments;
