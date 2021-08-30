import express from "express";
import { upload, remove } from "../controllers/cloudinary.js";

const router = express.Router();

router.post("/uploadImages", upload);
router.post("/removeImages", remove);

export default router;
