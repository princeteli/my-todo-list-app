import React, { useState } from 'react';
import axios from 'axios';

const Updata = (props) => {
  //  use state use kiya hai jo task complete or not ye batane ke liye hai 
  const [completed, setCompleted] = useState(props.task.completed);

  // update task function jo api call karke task complete ko true / false karega 
  const toggleComplete = async () => {
      await axios.put(`https://my-todo-list-server.onrender.com/updatetodo/${props.task._id}`, {
        completed: !completed,
      });
      setCompleted(!completed);
      props.refreshTasks(); 
  
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={toggleComplete}
        className="text-xl focus:outline-none"
        title={completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      >
        {/* task complete or not show karega */}
        {completed ? <i class="ri-checkbox-circle-line text-green-400"></i> : <i className="ri-indeterminate-circle-line text-red-500"></i>}
      </button>

      <span
        className={`text-lg ${
          completed ? 'line-through text-gray-500' : 'text-black'
        }`}
      >
        {props.task.taskName}
      </span>
    </div>
  );
};

export default Updata;
