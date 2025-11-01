import { User } from "../model/User.js";
import jwt from "jsonwebtoken"
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body || {};

    if (!name || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "All field are required",
      });
    }

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "USer is already register",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      success: true,
      message: "User added successfully.",
      data: user,
    });
  } catch (error) {
    console.log("error during register the user", error);
    return res.status(500).json({
      success: false,
      message: "Server error while adding User.",
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "All field are required",
      });
    }

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "NO user exists",
      });
    }

    let result =await user.comparePassword(password);

    if (!result) {
      return res.status(400).send({
        success: false,
        message: "Invalid credential",
      });
    }

    let token=jwt.sign({email:user.email,name:user.name,id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie("token",token)

    return res.status(201).json({
      success: true,
      message: "User login successfully.",
      data: user,
    });
    

  } catch (error) {
    console.log("server error during login", error);
    return res.status(500).json({
      success: false,
      message: "Server error while login User.",
      error: error.message,
    });
  }
};
