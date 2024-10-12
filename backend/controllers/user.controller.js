import { Users } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
  try {
    const { fullname, email, phone, password, role } = req.body;
    if ((!fullname, !email || !phone || !password || !role)) {
      return res.status(400).json({ message: "missing data", success: false });
    }
    const user = await Users.findOne({ email });
    if (user) {
      res.status(400).json({ message: "user already exists", success: false });
    }
    //convert password in hash
    const hashedPassword = await bcrypt.hash(password, 10);
    await Users.create({
      fullname,
      email,
      phone,
      password: hashedPassword,
      role,
    });
    return res.status(200).json({
      message: "Account Created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res
        .status(400)
        .json({ message: "missing data for login", success: false });
    }
    let user = await Users.findOne({ email });
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!user || !passwordMatch) {
      return res
        .status(400)
        .json({ message: "incorrect username or password", success: false });
    }
    // check if the role is correct for the given user
    if (role != user.role) {
      return res
        .status(400)
        .json({ message: "no accpunt for the specified role", success: false });
    }
    //everything is okay, now generate the login token
    const tokenData = {
      userId: user._id,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.fullname,
      email: user.email,
      phone: user.phone,
      role: user.role,
    };
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({ message: `Welcome back ${user.fullname} `, user, success: true });
  } catch (error) {
    console.log(error);
  }
};
export const logout = async (req, res) => {
  //delete the cookies
  // if no cookie exist, tell no user is logged in else just clear the cookies
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "user logged out successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};
export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phone, bio, skills } = req.body;
    // const resume=res.file;
    // if (!fullname || !email || !phone || !bio || !skills) {
    //   res.status(400).json({ message: "data missing", success: false });
    // }

    const userId = req.id; //from auth
    let user= await Users.findById(userId);
    console.log(user);
    if (!user) {
      res.status(400).json({ message: "user not logged in", success: false });
    }
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    if (bio) user.bio = bio;
    if (skills) {
      const skillsArray = skills.split(",");
      user.skills = skillsArray;
    }
    //add resume stuff as well
    await user.save();
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
      role: user.role,
    };
    return res.status(200).json({
      message: "user updated successfully",
      user,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
