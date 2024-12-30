import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddTask from "./Components/AddTask";
import Search from "./Components/Search";
import TaskList from "./Components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [editTask, setEditTask] = useState(null); // State for the task being edited

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/task/");
        setTasks(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  const handleTaskAdded = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const handleTaskUpdated = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task._id === updatedTask._id ? updatedTask : task))
    );
    setEditTask(null); // Clear edit mode after updating
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <ToastContainer />
      <main className="container mx-auto p-4 w-1/2 h-auto">
        <h1 className="text-center text-gray-900 font-bold text-3xl mb-6">
          Task Management App
        </h1>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <div className="flex-1 min-w-[200px]">
            {/* Pass the editTask and handlers to AddTask */}
            <AddTask
              task={editTask}
              onTaskAdded={handleTaskAdded}
              onTaskUpdated={handleTaskUpdated}
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <Search onSearch={setSearch} />
          </div>
        </div>
        <TaskList
          tasks={filteredTasks}
          onTaskUpdated={handleTaskUpdated}
          onTaskDeleted={(id) =>
            setTasks((prev) => prev.filter((task) => task._id !== id))
          }
          onTaskEdit={(task) => setEditTask(task)} // Set the task to be edited
        />
      </main>
    </div>
  );
};

export default App;
