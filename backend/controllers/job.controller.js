import { Jobs } from "../models/job.model.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId
    } = req.body;
    const userId = req.id;
    
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||!companyId
    ) {
      res.status(400).json({
        message: "data missing",
        success: false,
      });
    }

    const job = await Jobs.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      experience,
      position,
      company: companyId,
      createdBy: userId,
    });
    if(!job){
        return res.status(400).json({message:"something went wrong", success: false})
    }
    // console.log(job);
    return res
      .status(201)
      .json({ message: "job created!", job, success: true });
  } catch (error) {
    console.log(error);
  }
};
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Jobs.find(query).populate({ path: "company"}).sort({createdAt:-1});
    if (!jobs) {
      return res
        .status(404)
        .json({ message: "jobs not found", success: false });
    }
    res.status(200).json({ jobs, success: true });
  } catch (error) {
    console.log(error);
  }
};
export const jobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job =await Jobs.findById(jobId);
    if (!job) {
      res.status(400).json({ message: "job not found", success: false });
    }
    res.status(200).json({ job, success: true });
  } catch (error) {
    console.log(error);
  }
};
export const getAdminJobs = async (req, res) => {
    try {
        const adminId=req.id;
        const jobs=await Jobs.find({createdBy: adminId}).populate({ path: "company"}).sort({createdAt:-1});
        if(!jobs){
            res.status(400).json({message:"no jobs you admin ", success:false})
        }
        res.status(200).json({jobs, success:true});
    } catch (error) {
        console.log(error);
    }
};
