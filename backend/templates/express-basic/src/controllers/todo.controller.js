import Todo from "../models/todo.model.js";
import { sendResponse, errorResponse } from "../utils/responseHandler.js";

// 🧩 Get all todos
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    sendResponse(res, "Todos fetched successfully", todos);
  } catch (error) {
    errorResponse(res, 500, "Failed to fetch todos");
    console.log("Internal Server Error:", error);
  }
};

// 🧩 Get single todo by ID
export const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);

    if (!todo) {
      return errorResponse(res, 404, "Todo not found");
    }

    sendResponse(res, "Todo fetched successfully", todo);
  } catch (error) {
    errorResponse(res, 500, "Failed to fetch todo");
    console.log("Internal Server Error:", error);
  }
};

// 🧩 Create a new todo
export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newTodo = new Todo({
      title,
      description,
      completed: false,
    });

    const savedTodo = await newTodo.save();
    sendResponse(res, "Todo created successfully", savedTodo);
  } catch (error) {
    errorResponse(res, 500, "Failed to create todo");
    console.log("Internal Server Error:", error);
  }
};

// 🧩 Update a todo
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true }
    );

    if (!updatedTodo) {
      return errorResponse(res, 404, "Todo not found");
    }

    sendResponse(res, "Todo updated successfully", updatedTodo);
  } catch (error) {
    errorResponse(res, 500, "Failed to update todo");
    console.log("Internal Server Error:", error);
  }
};

// 🧩 Delete a todo
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return errorResponse(res, 404, "Todo not found");
    }

    sendResponse(res, "Todo deleted successfully", deletedTodo);
  } catch (error) {
    errorResponse(res, 500, "Failed to delete todo");
    console.log("Internal Server Error:", error);
  }
};
