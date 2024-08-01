import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";
import { createPost } from "./controllers/posts.js";
import { register, profile, login, logout } from "./controllers/auth.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/user.js";
import Post from "./models/post.js";
import { users, posts } from "./data/index.js";

// configuration//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/image", express.static(path.join(__dirname, "public/image")));
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
// file storage //
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/image");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// ROUTES WITH FILES //
// app.post("/auth/register", upload.single("picture"), register);
// app.get("/auth/profile", upload.single("picture"), profile);
// app.post("/posts", verifyToken, upload.single("picture"), createPost);
app.post("/auth/register", register);
app.post("/auth/logout", logout);
app.get("/auth/profile", profile);
app.post("/posts", createPost);
// ROUTES //
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

// MONGOOSE SETUP//
const PORT = 8000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to database");
    // ** ADD DATA **//
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((err) => console.log(`${err} did not connect to server`));

app.listen(PORT, () => console.log("i'am listen ,port 8000"));
