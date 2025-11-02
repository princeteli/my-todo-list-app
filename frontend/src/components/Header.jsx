import React, { useState } from "react";
import axios from "axios";
import Task from "./Task";

const Header = () => {
  const [Input, setInput] = useState("");
  const [Refresh, setRefresh] = useState(false);

  const refreshTasks = () => setRefresh(!Refresh);

  const addTask = async () => {
    if (Input.trim() === "") {
      alert("Input khali hai");
      return;
    }
    try {
      await axios.post("http://localhost:3000/createnewtodo", { task: Input });
      setInput("");
      refreshTasks(); // ✅ Move here, only after success
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">My Todo List App</h1>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your task"
          className="flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={addTask}
          className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Add Task
        </button>
      </div>

      <Task refresh={Refresh} refreshTasks={refreshTasks} />
    </div>
  );
};

export default Header;
