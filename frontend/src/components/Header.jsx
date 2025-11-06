import React, { useState } from "react";
import axios from "axios";
import Task from "./Task";

const Header = () => {

  // get task form user using use State 
  const [Input, setInput] = useState("");
  // refresh web site 
  const [Refresh, setRefresh] = useState(false);

  // refresh function jo task add , update , delete hone par todo app refresh karta hai
  const refreshTasks = () => setRefresh(!Refresh);

  //add task function jo api call karta hai 
  const addTask = async () => {
    if (Input.trim() == "") {
      alert("Input khali hai");
      return;
    }
    await axios.post("https://my-todo-list-server.onrender.com/createnewtodo", { task: Input })
    setInput("");
    refreshTasks();

  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 ">
      <h1 className="text-3xl text-center mb-6">My Todo List App</h1>

      <div className="flex gap-4 mb-6">
        {/* // task input box task user enter karega */}
        <input
          type="text"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your task"
          className="flex border border-gray-300 rounded-md px-4 py-2 "
        />
          {/* // task add karne ka button */}
        <button
          onClick={addTask}
          className="bg-black text-white px-5 py-2 "
        >
          Add Task
        </button>
      </div>

      {/*  task list component   hai header ke baad */}
      <Task refresh={Refresh} refreshTasks={refreshTasks} />
    </div>
  );
};

export default Header;
