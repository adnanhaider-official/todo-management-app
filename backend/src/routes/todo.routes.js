import { Router } from "express";
import {
  createTodo,
  getAllTodo,
  updateTodo,
} from "../controllers/todo.controller.js";

const router = Router();

router.post("/", createTodo);
router.get("/", getAllTodo);
router.put("/:id", updateTodo);

export default router;
