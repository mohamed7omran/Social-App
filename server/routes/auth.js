import express from "express";
import { login } from "../controllers/auth";

const router = express.Router();
// auth/login
router.post("/login", login);

export default router;
