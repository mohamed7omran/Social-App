"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Login from "./(scenes)/login/page";
import HomePage from "./(scenes)/homePage/page";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setId } from "./redux/authSlice";
export default function Home() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  console.log("email", globalState.email);

  useEffect(() => {
    axios.get("/auth/profile").then((response) => {
      console.log("profile res :", response.data);
      // dispatch(setEmail(response.data.email));
      // dispatch(setId(response.data.userId));
    });
  }, []);
  // if (setEmail) {
  //   return <HomePage></HomePage>;
  // }

  axios.defaults.baseURL = "http://localhost:8000";
  // for set cookies from api
  axios.defaults.withCredentials = true;
  return <Login />;
}
