// import library
import express from "express";

// import controllers

import {
  getCharacters,
  getSingleCharacter,
} from "../controllers/character-controllers.js";

const router = express.Router();

router.get("/", getCharacters);
router.get("/:id", getSingleCharacter);

export default router;
