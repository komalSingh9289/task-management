import express from "express";
import { addNewTask, deleteTask, getAllTasks, updateTask } from "../Controllers/task-controllers.js";

const router = express.Router();

router.get('/', getAllTasks);
router.post('/', addNewTask);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);

export default router;