// import library
import express from "express";

// import controllers

import {
  getPersonalityTypes,
  getSinglePersonality,
  getCharacterMBTI,
  getAllCharactersMBTI,
  getPersonalityInfo,
} from "../controllers/mbti-controllers.js";

const router = express.Router();

router.get("/", getPersonalityTypes);
router.get("/:id", getSinglePersonality);
router.get("/:id/character", getCharacterMBTI);
router.get("/type/:type_name", getPersonalityInfo);
router.get("/all/mbti", getAllCharactersMBTI);

export default router;
