import express from "express";

const router = express.Router();

import {
  getFacilities,
  addFacility,
  deleteFacility,
  editFacility,
  listFacilities,
  facilityCount,
} from "../controllers/facility.js";

router.get("/facility", getFacilities);
router.get("/facility/total", facilityCount);
router.post("/facility/pagination", listFacilities);
router.post("/facility", addFacility);
router.delete("/facility/:id", deleteFacility);
router.post("/facility/:id", editFacility);

export default router;
