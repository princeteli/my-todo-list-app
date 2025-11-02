import axios from "axios";
import React from "react";

const Delete = ({ id, refreshTasks }) => {
  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:3000/deletetodo/${id}`);
      console.log("Deleted task with id:", id);
      refreshTasks(); // ✅ Refresh task list
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <button
      onClick={deleteTask}
      className="text-red-500 text-xl hover:text-red-700 transition-colors"
      title="Delete task"
    >
      🗑️
    </button>
  );
};

export default Delete;
