import mongoose from "mongoose";
const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    unique:true
  },
  location: {
    type: String,
  },
  photo: {
    type: String,
  },
  description: {
    type: String,
  },
  website: {
    type: String,
  },
  registeredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
},{ timestamps: true });
export const Companys = mongoose.model("Companys", companySchema);
