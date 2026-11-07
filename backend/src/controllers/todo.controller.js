import Todo from "../models/todo.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";

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
