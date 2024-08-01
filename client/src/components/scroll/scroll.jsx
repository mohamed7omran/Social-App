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
  const [post, setPost] = useState([
    {
      userId: "333",
      firstName: "mohamed",
      lastName: "sayed",
      location: "giza",
      description: "hi there",
      picturePath: "http://tarmeezacademy.com/images/users/PJUaA4J1fAIT0FS.jpg",
      userPicturePath:
        "http://tarmeezacademy.com/images/users/PJUaA4J1fAIT0FS.jpg",
      likes: 30,
      comments: 2,
    },
  ]);
  // const { ref, inView } = useInView();
  // const [currentPage, setCurrentPage] = useState();
  const getting = async () => {
    const response = await axios.get(`http://localhost:8000/posts`);
    const posts = response.data;
    // const lastPage = response.data.meta.last_page;
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
            commentsCount={ele.comments}
            // commentsCount={globalState}
            profileImage={
              Object.keys(ele.userPicturePath).length == 0
                ? "/image/default-avatar.webp"
                : ele.userPicturePath
            }
            image={
              Object.keys(ele.picturePath).length == 0
                ? "/image/photo.png"
                : ele.picturePath
            }
            name={ele.firstName}
            body={ele.description}
            created={ele.userId}
          ></Post>
        ))}
        {/* <div ref={ref}></div> */}
      </div>
    </div>
  );
};

export default Scroll;

// id: 22577,
//       title: "مقولة",
//       body: "من قال لأخيه «ادع لي» كان هو وأخوه من المتعاونين على البر والتقوى.\r\n\r\n- ابن تيمية",
//       author: {
//         id: 11340,
//         profile_image:
//           "http://tarmeezacademy.com/images/users/PJUaA4J1fAIT0FS.jpg",
//         is_fake: 0,
//         username: "ouais.abdullah.ye",
//         name: "أويس الهتار",
//         email: "ouis@gmail.com",
//         email_verified_at: null,
//         remember_token: null,
//         created_at: "2024-06-07T23:46:17.000000Z",
//         updated_at: "2024-06-07T23:46:17.000000Z",
//       },
//       image: "http://tarmeezacademy.com/images/posts/KjB0TX9ZbTHpYaK.jpg",
//       tags: [],
//       created_at: "2 hours ago",
//       comments_count: 1,
