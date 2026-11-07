import Todo from "../models/todo.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";
import mongoose from "mongoose";

// create Todo
export const createTodo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  // Check required fields
  if (!title?.trim() || !description?.trim()) {
    throw new ApiError(400, "Title and description are required");
  }

  const todo = await Todo.create({ title, description });

  return res
    .status(201)
    .json(new ApiResponse(201, todo, "Todo created Successfully"));
});

// get All Todo
export const getAllTodo = asyncHandler(async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, todos, "Todos fetched successfully"));
});

// update Todo
export const updateTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid Todo ID");
  }

  const todo = await Todo.findByIdAndUpdate(
    id,
    {
      $set: req.body,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!todo) {
    throw new ApiError(404, "Todo not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, todo, "Todo updated successfully"));
});

// delete Todo
export const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid Todo ID");
  }

  const todo = await Todo.findByIdAndDelete(id);

  if (!todo) {
    throw new ApiError(404, "Todo not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, todo, "Todo deleted successfully"));
});
