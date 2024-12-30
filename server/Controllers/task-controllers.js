import mongoose from "mongoose";
import Task from "../Models/task-model.js";

// Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // Fetch all tasks from the database
    res.status(200).json(tasks); // Respond with the tasks in JSON format
  } catch (error) {
    res.status(500).json({ message: `Failed to get tasks: ${error.message}` });
  }
};

// Add a new task
export const addNewTask = async (req, res) => {
  try {
    const { title, isDone } = req.body;

    // Validate input
    if (!title || isDone === undefined) {
      return res.status(400).json({ message: "Title and isDone are required." });
    }

    const newTask = new Task({ title, isDone }); // Create a new task
    await newTask.save(); // Save the task to the database
    res.status(201).json(newTask); // Respond with the newly created task
  } catch (error) {
    res.status(500).json({ message: `Failed to add task: ${error.message}` });
  }
};

// Update an existing task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params; // Get task ID from the URL parameters
    const { title, isDone } = req.body; // Get updated data from the request body

    // Validate input
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID." });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, isDone },
      { new: true, runValidators: true } // Return the updated document and validate inputs
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.status(200).json(updatedTask); // Respond with the updated task
  } catch (error) {
    res.status(500).json({ message: `Failed to update task: ${error.message}` });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params; // Get task ID from the URL parameters

    // Validate input
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID." });
    }

    const deletedTask = await Task.findByIdAndDelete(id); // Delete the task by ID

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.status(200).json({ message: "Task deleted successfully." }); // Confirm deletion
  } catch (error) {
    res.status(500).json({ message: `Failed to delete task: ${error.message}` });
  }
};
