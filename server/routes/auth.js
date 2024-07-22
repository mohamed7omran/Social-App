import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();
// When a POST request is made to /login, Express will execute the login function imported from "../controllers/auth".
router.post("/login", login);

export default router;
