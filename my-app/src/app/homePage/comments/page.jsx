"use client";
import React from "react";
import Post from "../../../components/post/post";
import axios from "axios";

import Comment from "../../../components/comment/comment";
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
  const geting = async () => {
    const respons = await axios.get(
      `https://tarmeezacademy.com/api/v1/posts/1`
    );
    const post = respons.data.data;
    console.log(post);
    const author = respons.data.data.author;
    const comments = respons.data.data.comments;
    setPost(post);
    setAuthor(author);
    setComment(comments);
  };
  useEffect(() => {
    geting();
  }, []);
  return (
    <div className="container mx-auto px-40">
      <Post
        commentsCount={post.comments_count}
        profileImage={
          author.profile_image
          // Object.keys(author.profile_image).length == 0
          //   ? "/image/default-avatar.webp"
          //   : author.profile_image
        }
        body={post.body}
        image={post.image == "" ? "/image/photo.png" : post.image}
        name={author.name}
        created={post.created_at}
      />
      {comment.map((ele, id) => (
        <Comment
          key={id}
          img={ele.author.profile_image}
          name={ele.author.name}
          body={ele.body}
        />
      ))}
    </div>
  );
};
export default Comments;
