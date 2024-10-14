import mongoose from "mongoose";
const jobsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: [
      {
        type: String,
      }
    ],
    salary: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Companys",
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    applications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Applications" },
    ],
  },
  { timestamps: true }
);
export const Jobs = mongoose.model("Jobs", jobsSchema);
