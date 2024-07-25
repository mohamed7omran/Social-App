"use client";
import { createContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import App from "./App";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
export const UserContext = createContext({});

export default function Home() {
  const [email, setEmail] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    axios.get("/auth/profile").then((response) => {
      console.log("profile res :", response.data);
      setId(response.data.userId);
      setEmail(response.data.email);
    });
  }, []);
  axios.defaults.baseURL = "http://localhost:8000";
  // for set cookies from api
  axios.defaults.withCredentials = true;
  return (
    <UserContext.Provider value={{ email, setEmail, id, setId }}>
      <App />
    </UserContext.Provider>
  );
}
