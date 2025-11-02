import React, { useEffect, useState } from "react";
import axios from "axios";
import Delete from "./Delete";
import Updata from "./Updata";

const Task = ({ refresh, refreshTasks }) => {
  const [tasks, setTasks] = useState([]);

  const getTask = async () => {
    try {
      const res = await axios.get("http://localhost:3000/getalltodos");
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    getTask();
  }, [refresh]);

  return (
    <div className="max-w-md mx-auto">
      <ul className="space-y-3">
        {tasks.map((task, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between bg-white p-3 rounded shadow"
          >
            <Updata task={task} refreshTasks={refreshTasks} />
            <Delete id={task._id} refreshTasks={refreshTasks} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
