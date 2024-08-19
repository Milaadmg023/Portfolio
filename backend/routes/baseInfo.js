import express from "express";
import getAllInfo from "../controllers/baseInfoController.js";
const router = express.Router();
router.get("/", getAllInfo);
export default router