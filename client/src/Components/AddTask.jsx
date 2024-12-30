import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { MdAdd } from "react-icons/md";

const AddTask = ({ task, onTaskAdded, onTaskUpdated }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title); // Pre-fill the title when editing
    } else {
      setTitle(""); // Clear the input when adding
    }
  }, [task]);

  const handleAddOrUpdateTask = async () => {
    if (!title.trim()) {
      toast.error("Task title cannot be empty!");
      return;
    }

    if (task) {
      // Update task logic
      try {
        const updatedTask = { ...task, title };
        const res = await axios.put(`http://localhost:5000/api/task/update/${task._id}`, updatedTask);
        toast.success("Task updated successfully!");
        onTaskUpdated(res.data);
      } catch (err) {
        toast.error("Failed to update task!");
      }
    } else {
      // Add task logic
      try {
        const res = await axios.post("http://localhost:5000/api/task/", { title, isDone: false });
        toast.success("Task added successfully!");
        onTaskAdded(res.data);
      } catch (err) {
        toast.error("Failed to add task!");
      }
    }

    setTitle(""); // Clear the input after adding/updating
  };

  return (
    <div className="flex items-center p-4">
      <input
        type="text"
        placeholder="Enter task title"
        className="w-full p-2 border-2 border-orange-500 focus:outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={handleAddOrUpdateTask}
        className="bg-orange-700 text-white text-lg px-4 py-2 mx-1 hover:bg-orange-600"
      >
        {task ? "Update" : "Add"} {/* Change button text based on mode */}
      </button>
    </div>
  );
};

export default AddTask;
