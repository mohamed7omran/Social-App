"use client";
import Landing from "./landing";
import SignUp from "./signUp/page";
import HomePage from "./homePage/page";
import { useContext } from "react";
import { UserContext } from "./page";

export default function App() {
  //   const { email, id } = useContext(UserContext);

  //   if (email) {
  //     return <HomePage />;
  //   }
  return <SignUp />;
}
