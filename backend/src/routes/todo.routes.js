import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodo,
  updateTodo,
} from "../controllers/todo.controller.js";

const router = Router();

router.post("/", createTodo);
router.get("/", getAllTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
