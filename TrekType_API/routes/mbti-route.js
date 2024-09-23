// import library
import express from "express";

// import controllers

import {
  getPersonalityTypes,
  getSinglePersonality,
  getCharacterMBTI,
  getAllCharactersMBTI,
  findMBTIType,
  getPersonalityInfo,
} from "../controllers/mbti-controllers.js";

const router = express.Router();

router.get("/", getPersonalityTypes);
router.get("/:id", getSinglePersonality);
router.get("/:id/character", getCharacterMBTI);
router.get("/type/:type_name", getPersonalityInfo);
router.get("/all/mbti", getAllCharactersMBTI);
router.post("/findMBTIType", findMBTIType);
export default router;
