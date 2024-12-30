import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaTrash, FaEdit, FaCheckCircle } from "react-icons/fa";

const TaskList = ({ tasks, onTaskUpdated, onTaskDeleted, onTaskEdit }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/task/delete/${id}`);
      toast.success("Task deleted!");
      onTaskDeleted(id);
    } catch (err) {
      toast.error("Failed to delete task!");
    }
  };

  const handleComplete = async (task) => {
    try {
      const updatedTask = { ...task, isDone: !task.isDone };
      const res = await axios.put(`http://localhost:5000/api/task/update/${task._id}`, updatedTask);
      toast.success("Task marked as completed!");
      onTaskUpdated(res.data);
    } catch (err) {
      toast.error("Failed to update task!");
    }
  };

  return (
    <div className="p-4">
      {tasks.map((task) => (
        <div
          key={task._id}
          className={`flex items-center justify-between p-4 mb-2 border-2 border-gray-500 rounded-md ${
            task.isDone ? "bg-green-100" : "bg-white"
          }`}
        >
          <span
            className={`${
              task.isDone ? "line-through text-gray-400" : "text-black"
            }`}
          >
            {task.title}
          </span>
          <div className="flex gap-4">
            <button onClick={() => handleComplete(task)}>
              <FaCheckCircle
                className={`text-xl ${
                  task.isDone ? "text-green-500" : "text-gray-700"
                }`}
              />
            </button>
            <button onClick={() => onTaskEdit(task)}>
              <FaEdit className="text-xl text-orange-600" />
            </button>
            <button onClick={() => handleDelete(task._id)}>
              <FaTrash className="text-red-500 text-xl" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
