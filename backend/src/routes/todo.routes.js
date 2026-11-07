import { Router } from "express";
import { createTodo, getAllTodo } from "../controllers/todo.controller.js";

const router = Router();

router.post("/", createTodo);
router.get("/", getAllTodo);

export default router;
