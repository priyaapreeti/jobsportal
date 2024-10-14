import { Applications } from "../models/application.model.js";
import { Jobs } from "../models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      res.status(400).json({ message: "no job lol", success: false });
    }
    //check if the job is already applied by the user
    const alreadyApplied = await Applications.findOne({
      job: jobId,
      applicant: userId,
    });
    if (alreadyApplied) {
      return res.status(400).json({
        message: "already applied",
        success: false,
      });
    }
    //if job with the jobid= exists
    const job = await Jobs.findById(jobId);
    if (!job) {
      return res.status(200).json({ message: "job not found", success: false });
    }
    const applied = await Applications.create({
      job: jobId,
      applicant: userId,
    });
    job.applications.push(applied);
    await job.save();
    return res.status(200).json({ message: "applied", success: true });
  } catch (error) {
    console.log(error);
  }
};
export const checkApplications = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Applications.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: { path: "company", options: { sort: { createdAt: -1 } } },
      });
    if (!application) {
      res.status(400).json({ message: "no applications", success: false });
    }
    res.status(200).json({ application, success: true });
  } catch (error) {
    console.log(error);
  }
};
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Jobs.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: { path: "applicant" },
    });
    if (!job) {
      res.status(400).json({ message: "no jobs", success: false });
    }
    res.status(200).json({ job, success: true });
  } catch (error) {
    console.log(error);
  }
};
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res
        .status(400)
        .json({ message: "status reguired", success: false });
    }
    //find application by application id, if fouund update it,
    const application =await Applications.findOne({ _id: applicationId });
    if (!application) {
      // if notfound, return not found
      return res
        .status(400)
        .json({ message: "Application not found", success: false });
    }
    console.log(application);
    // if fouund update it,
    application.status = status.toLowerCase();
    // console.log(application)
    await application.save();

    return res.status(200).json({
      message: "updated successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
