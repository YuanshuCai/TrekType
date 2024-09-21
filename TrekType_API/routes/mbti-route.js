// import library
import express from "express";

// import controllers

import {
  getPersonalityTypes,
  getSinglePersonality,
  getCharacterMBTI,
  getAllCharactersMBTI,
  findMBTIType,
} from "../controllers/mbti-controllers.js";

const router = express.Router();

router.get("/", getPersonalityTypes);
router.get("/:id", getSinglePersonality);
router.get("/:id/character", getCharacterMBTI);
router.get("/all/mbti", getAllCharactersMBTI);
router.post("/findMBTIType", findMBTIType);
export default router;
