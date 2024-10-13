import express from "express";
import {
  getAdminJobs,
  getAllJobs,
  jobById,
  postJob,
} from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const routes = express.Router();

routes.route("/add").post(isAuthenticated, postJob);
routes.route("/jobs").get(isAuthenticated, getAllJobs);
routes.route("/job/:id").get(isAuthenticated, jobById);
routes.route("/jobAdmin/").get(isAuthenticated, getAdminJobs);
export default routes;
