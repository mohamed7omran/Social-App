"use client";
import { createContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import Login from "./(scenes)/login/page";
import HomePage from "./(scenes)/homePage/page";
import ProfilePage from "./(scenes)/profilePage/page";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
export const UserContext = createContext({});

export default function Home() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  // const [email, setEmail] = useState(null);
  // const [id, setId] = useState(null);

  // useEffect(() => {
  //   axios.get("/auth/profile").then((response) => {
  //     console.log("profile res :", response.data);
  //     setId(response.data.userId);
  //     setEmail(response.data.email);
  //   });
  // }, []);

  axios.defaults.baseURL = "http://localhost:8000";
  // for set cookies from api
  axios.defaults.withCredentials = true;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Login />
        {/* <HomePage />
        <ProfilePage /> */}
      </CssBaseline>
    </ThemeProvider>
  );
}
