// import library
import express from "express";

// import controllers

import { getQuestions } from "../controllers/question-controllers.js";

const router = express.Router();

router.get("/", getQuestions);

export default router;
