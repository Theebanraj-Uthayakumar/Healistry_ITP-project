import express from "express";
const router = express.Router();

import {
  getTechnologies,
  editTechnology,
  addTechnology,
  deleteTechnology,
  technologyCount,
  listTechnologies,
} from "../controllers/technology.js";
router.post("/technology", addTechnology);
router.get("/technology", getTechnologies);
router.get("/technology/total", technologyCount);
router.post("/technology/pagination", listTechnologies);
router.delete("/technology/:id", deleteTechnology);
router.post("/technology/:id", editTechnology);

export default router;
