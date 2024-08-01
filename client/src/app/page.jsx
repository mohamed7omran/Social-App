"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Landing from "./landing";
import App from "./App";
import { useSelector, useDispatch } from "react-redux";
import { setGlobalEmail, setGlobalId } from "./redux/authSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/auth/profile")
      .then((response) => {
        console.log("profile res:", response.data);
        dispatch(setGlobalEmail(response.data.email)); // Dispatch email from response
        dispatch(setGlobalId(response.data.userId)); // Dispatch userId from response
      })
      .catch((error) => {
        console.error("Failed to fetch profile:", error);
      });
  }, []);

  // Set axios defaults
  axios.defaults.baseURL = "http://localhost:8000";
  axios.defaults.withCredentials = true;
  return <App />; // Render Login if not authenticated
}
