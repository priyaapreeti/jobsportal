import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      required: true,
    },
    profile: {
      bio: { type: String },
      skills: { type: String },
      resume: { type: String }, //url
      resumeOriginal: { type: String },
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Companys" },
      profilePhoto: { type: String, default: "" },
    },
  },
  { timestamps: true }
);
export const Users = mongoose.model("Users", userSchema);
