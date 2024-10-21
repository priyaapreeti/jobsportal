import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { fileOp } from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(fileOp, register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated, fileOp, updateProfile);
router.route("/logout").post(isAuthenticated, logout);

export default router;
