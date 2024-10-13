import express from "express";
import {
  companyById,
  getCompany,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router = express.Router();

router.route("/register").post(isAuthenticated, registerCompany);
router.route("/update/:id").put(isAuthenticated, updateCompany);
router.route("/all").get(isAuthenticated, getCompany);
router.route("/:id").get(isAuthenticated, companyById);

export default router;
