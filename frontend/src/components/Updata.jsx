import React, { useState } from 'react';
import axios from 'axios';

const Updata = ({ task, refreshTasks }) => {
  const [completed, setCompleted] = useState(task.completed);

  const toggleComplete = async () => {
    try {
      await axios.put(`http://localhost:3000/updatetodo/${task._id}`, {
        completed: !completed,
      });
      setCompleted(!completed);
      refreshTasks(); // ✅ refresh list after update
    } catch (error) {
      console.error("Failed to update task status:", error);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={toggleComplete}
        className="text-xl focus:outline-none"
        title={completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      >
        {completed ? '✅' : '⭕'}
      </button>

      <span
        className={`text-lg ${
          completed ? 'line-through text-gray-500' : 'text-black'
        }`}
      >
        {task.taskName}
      </span>
    </div>
  );
};

export default Updata;
