import User from "../models/user.model.js";
import bycryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { email, username, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    // return res.status(400).json({ Message: "All fields are required" });
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bycryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("Signup succesful");
  } catch (error) {
   next(error);
  }
};
