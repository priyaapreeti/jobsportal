import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJob, checkApplications, getApplicants, updateStatus } from "../controllers/application.controller.js";
const routes= express.Router();

routes.route("/apply/:id").post(isAuthenticated,applyJob);
routes.route("/get").get(isAuthenticated,checkApplications);
routes.route("/:id/applicants").get(isAuthenticated,getApplicants);
routes.route("/status/:id/update").post(isAuthenticated,updateStatus);

export default routes;