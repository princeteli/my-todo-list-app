import axios from "axios";
import React from "react";

const Delete = (props) => {
 
  // task ko api call karke delete kare ga
  const deleteTask = async () => {
    await axios.delete(`https://my-todo-list-server.onrender.com/deletetodo/${props.id}`);
    props.refreshTasks();

  };

  return (
    <button
      onClick={deleteTask}
      className="text-red-500 text-xl hover:text-red-700 transition-colors"
      title="Delete task"
    >
      <i class="ri-delete-bin-6-line"></i>
    </button>
  );
};

export default Delete;
