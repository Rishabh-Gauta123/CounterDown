import express from 'express';
import { createTimer, deleteTimer, getTimer, updateTimer } from '../controller/timeController.js';

console.log("req is coming to the route ");
const router=express.Router();

router.post("/", createTimer);
router.get("/", getTimer);
router.put("/", updateTimer);
router.delete("/", deleteTimer);


export default router;
