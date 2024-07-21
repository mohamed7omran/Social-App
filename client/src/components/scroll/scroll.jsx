"use client";
import React from "react";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Post from "../../components/post/post";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

const Scroll = () => {
  // const globalState = useSelector((state) => state.comment.numOfComment);
  // const dispatch = useDispatch();

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
  const getting = async () => {
    const respons = await axios.get(
      `https://tarmeezacademy.com/api/v1/posts?limit=20`
    );
    const posts = respons.data.data;
    // const lastPage = respons.data.meta.last_page;
    console.log(posts);
    setPost((oldPost) => oldPost.concat(posts));
  };

  useEffect(() => {
    getting();
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
    <div className="  px-5 h-screen">
      <div className="posts">
        {post.map((ele, id) => (
          <Post
            key={id}
            commentsCount={ele.comments_count}
            // commentsCount={globalState}
            profileImage={
              Object.keys(ele.author.profile_image).length == 0
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
