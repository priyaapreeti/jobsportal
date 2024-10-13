import { Companys } from "../models/company.model.js";

//register a company
export const registerCompany = async (req, res) => {
  try {
    const { companyName, location, description, website } = req.body;
    // console.log(website);
    const registeredBy = req.id;
    // = from cookie ig of the auth user
    if (!registeredBy)
      res.status(401).json({ message: "unauthorised user", success: false });
    // if (!companyName || !location || !description || !website) {
    //   res.status(400).json({ message: "missing data", success: false });
    // }
    //if company is already registered
    let company = await Companys.findOne({ companyName });
    if (company) {
      res
        .status(400)
        .json({ message: "company already exists", success: false });
    }
    //register
    company = await Companys.create({
      companyName,
      location,
      description,
      website,
      registeredBy,
    });
    return res.status(200).json({
      message: "company created successsfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
//edit company
export const updateCompany = async (req, res) => {
  try {
    const { companyName, location, description, website } = req.body;
    //    const companyId= req.id;

    const updateData = { companyName, location, description, website };
    const company = await Companys.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    if (!company) {
      return res
        .status(400)
        .json({ message: "company not found", success: false });
    }
    return res
      .status(200)
      .json({ message: "company deets updated", success: true });
    //    let =await Users.findById(userId);

    //    if(companyName) Companys.companyName= companyName;
    //    if(location) Companys.location= location;
    //    if(description) Companys.description=description;
    //    if(website) Companys.website= website;
  } catch (error) {
    console.log(error);
  }
};
//get company
export const getCompany = async (req, res) => {
  try {
    const registeredBy = req.id;
    // console.log(registeredBy);
    const companies = await Companys.find({ registeredBy });
    // console.log(companies);
    if (companies.length===0) {
      return res
        .status(404)
        .json({ message: "companies not found", success: false });
    }
    return res
      .status(200)
      .json({ message: "companies found", companies, success: true });
  } catch (error) {
    console.log(error);
  }
};
// get company by id
export const companyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Companys.findById(companyId);
    if (!company) {
      return res.status(400).json({ message: "no company", success: false });
    }
    return res.status(200).json({ company });
  } catch (error) {
    console.log(error);
  }
};
