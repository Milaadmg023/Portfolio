import express from "express";
import {getMessages} from "../controllers/messageController.js";
import {postMessage} from "../controllers/messageController.js";

const router = express.Router();
router.get("/", getMessages);
router.post("/", postMessage);

export default router