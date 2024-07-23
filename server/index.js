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
import { register, profile, login } from "./controllers/auth.js";
import { verifyToken } from "./middleware/auth.js";

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
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
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
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// ROUTES WITH FILES //
app.post("/auth/register", upload.single("picture"), register);
app.get("/auth/profile", upload.single("picture"), profile);
app.post("/auth/login", upload.single("picture"), login);
// ROUTES //
app.use("auth", authRoutes);

// app.get("/profile", async (req, res) => {
//   const token = req.cookies?.token;
//   console.log("token :", req.cookies?.token);
//   if (token) {
//     // return id and username
//     jwt.verify(token, jwtSecret, {}, (err, userData) => {
//       if (err) throw err;
//       res.json(userData);
//     });
//   } else {
//     res.status(401).json("no token");
//   }
// });

// app.post("/register", async (req, res) => {
//   try {
//     const {
//       firstName,
//       lastName,
//       email,
//       password,
//       picturePath,
//       friends,
//       location,
//       occupation,
//     } = req.body;
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(password, salt);
//     console.log("successfully post registration");
//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//       picturePath,
//       friends,
//       location,
//       occupation,
//       viewedProfile: Math.floor(Math.random() * 10000),
//       impressions: Math.floor(Math.random() * 10000),
//     });
//     const savedUser = await newUser.save();
//     jwt.sign(
//       { userId: newUser._id, email },
//       process.env.JWT_SECRET,
//       {},
//       (err, token) => {
//         if (err) throw err;

//         res.cookie("token", token).status(201).json({
//           id: newUser._id,
//         });
//       }
//     );
//     // res.status(201).json(savedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// MONGOOSE SETUP//
const PORT = 8000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(`${err} did not connect to server`));

app.listen(PORT, () => console.log("i'am listen ,port 8000"));
