import express from "express";
import ProjectsController from "../controllers/projectsController.js";
const router = express.Router();


router.get("/", ProjectsController);


export default router