"use client";
import Landing from "./landing";
import Login from "./(scenes)/login/page";
import HomePage from "./(scenes)/homePage/page";
import { useSelector } from "react-redux";
export default function App() {
  const { email } = useSelector((state) => state.auth); // Use 'auth' as per your slice

  if (email) {
    return <HomePage />;
  }
  return <Login />;
}
