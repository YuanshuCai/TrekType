// import library
import express from "express";

// import controllers

import {
  getPersonalityTypes,
  getSinglePersonality,
} from "../controllers/mbti-controllers.js";

const router = express.Router();

router.get("/", getPersonalityTypes);
router.get("/:id", getSinglePersonality);

export default router;
