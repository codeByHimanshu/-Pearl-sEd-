import { createLecture } from "../controllers/lectures.controller.js";
import express from "express";

const lectureRouter = express.Router();

lectureRouter.post("/create-lecture", createLecture);

export default lectureRouter;