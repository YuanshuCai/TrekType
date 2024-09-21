// import library
import express from "express";

// import controllers

import {
  getPersonalityTypes,
  getSinglePersonality,
  getCharacterMBTI,
  findMBTIType,
} from "../controllers/mbti-controllers.js";

const router = express.Router();

router.get("/", getPersonalityTypes);
router.get("/:id", getSinglePersonality);
router.get("/:id/character", getCharacterMBTI);
router.post("/findMBTIType", findMBTIType);
export default router;
