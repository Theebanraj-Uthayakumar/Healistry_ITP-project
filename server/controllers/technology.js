import Technology from "../models/Technology.js";

export const addTechnology = async (req, res, next) => {
  try {
    console.log("fneff");
    const { machineId, machineName, price, eta, purpose } = req.body;
    console.log(machineId);
    const newTechnology = await new Technology(req.body).save();
    res.json(newTechnology);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "failed" });
  }
};

export const editTechnology = async (req, res, next) => {
  try {
    const id = req.params.id;
    const technology = await Technology.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.json(technology);
  } catch (error) {
    res.status(400).json({ error: "failed" });
  }
};

export const deleteTechnology = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await Technology.findByIdAndDelete(id);
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: "failed" });
  }
};

export const getTechnologies = async (req, res, next) => {
  try {
    const technologies = await Technology.find();
    res.json(technologies);
  } catch (error) {
    res.status(400).json({ error: "failed" });
  }
};

export const listTechnologies = async (req, res) => {
  try {
    const { sort, order, page } = req.body;
    const currentPage = page || 1;
    const perPage = 3;

    const technologies = await Technology.find()
      .skip((currentPage - 1) * perPage)
      .sort([[sort, order]])
      .limit(perPage)
      .exec();
    res.json(technologies);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "failed" });
  }
};

export const technologyCount = async (req, res) => {
  let total = await Technology.find({}).estimatedDocumentCount().exec();
  res.json(total);
};
