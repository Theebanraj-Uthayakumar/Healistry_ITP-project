import Facility from "../models/Facility.js";

export const addFacility = async (req, res, next) => {
  try {
    console.log("fneff");
    const newFacility = await new Facility(req.body).save();
    res.json(newFacility);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.json({ status: "error", error: "duplicate key" });
    }
    res.status(400).json({ error: "failed" });
  }
};

export const editFacility = async (req, res, next) => {
  try {
    const id = req.params.id;
    const facility = await Facility.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(facility);
  } catch (error) {
    if (error.code === 11000) {
      res.json({ status: "error", error: "duplicate key" });
    }
    res.status(400).json({ error: "failed" });
  }
};

export const deleteFacility = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await Facility.findByIdAndDelete(id);
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: "failed" });
  }
};

export const getFacilities = async (req, res, next) => {
  try {
    const facility = await Facility.find();
    res.json(facility);
  } catch (error) {
    res.status(400).json({ error: "failed" });
  }
};

export const listFacilities = async (req, res) => {
  try {
    const { sort, order, page } = req.body;
    const currentPage = page || 1;
    const perPage = 3;

    const facility = await Facility.find()
      .skip((currentPage - 1) * perPage)
      .sort([[sort, order]])
      .limit(perPage)
      .exec();
    res.json(facility);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "failed" });
  }
};

export const facilityCount = async (req, res) => {
  let total = await Facility.find({}).estimatedDocumentCount().exec();
  res.json(total);
};
