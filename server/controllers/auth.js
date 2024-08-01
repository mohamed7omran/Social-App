import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";

//** REGISTER USER ** //
export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, picturePath, friends } =
      req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      picturePath,
      friends,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    await newUser.save();
    jwt.sign(
      { userId: newUser._id, email },
      process.env.JWT_SECRET,
      (err, token) => {
        if (err) {
          return res.status(500).json({ error: "Token generation failed" });
        }
        res.cookie("token", token).status(201).json({
          id: newUser._id,
        });
      }
    );

    // res.status(201).json("user saved", savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ** LOGGING IN **//
export const login = async (req, res) => {
  try {
    console.log("Login successful");
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User does not exist." });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    jwt.sign({ id: user._id, email }, process.env.JWT_SECRET, (err, token) => {
      if (err) {
        return res.status(500).json({ error: "Token generation failed" });
      }
      res.cookie("token", token).status(201).json({
        id: user._id,
      });
    });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};
// ** LOGOUT **//
export const logout = async (req, res) => {
  res.cookie("token", "").json("Ok");
};

// ** PROFILE **//

export const profile = async (req, res) => {
  const token = req.cookies?.token;
  if (token) {
    // return id and email
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, userData) => {
      if (err) throw err;
      res.json(userData);
    });
  } else {
    res.status(401).json("no token");
  }
};

// app.post("/register", async (req, res) => {
//     const { username, password } = req.body;
//     try {
//       const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
//       console.log("successfully post registration");
//       const createdUser = await User.create({
//         username: username,
//         password: hashedPassword,
//       });
//       // !nwe why mongodb id
//       jwt.sign(
//         { userId: createdUser._id, username },
//         jwtSecret,
//         {},
//         (err, token) => {
//           if (err) throw err;

//           res.cookie("token", token).status(201).json({
//             id: createdUser._id,
//           });
//         }
//       );
//     } catch (err) {
//       if (err) throw err;
//       res.status(500).json("error");
//     }
//   });
