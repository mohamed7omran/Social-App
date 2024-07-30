"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Landing from "./landing";
import HomePage from "./(scenes)/homePage/page";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setId } from "./redux/authSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { email, id: userId } = useSelector((state) => state.auth); // Use 'auth' as per your slice
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set axios defaults
    axios.defaults.baseURL = "http://localhost:8000";
    axios.defaults.withCredentials = true;

    axios
      .post("/auth/profile")
      .then((response) => {
        console.log("profile res:", response.data);
        dispatch(setEmail(response.data.email)); // Dispatch email from response
        dispatch(setId(response.data.userId)); // Dispatch userId from response
      })
      .catch((error) => {
        console.error("Failed to fetch profile:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Add a spinner or loading animation if desired
  }

  if (email && userId) {
    return <HomePage />; // Render HomePage if authenticated
  }

  return <Landing />; // Render Login if not authenticated
}
