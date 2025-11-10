import React, { useEffect, useState } from "react";
import axios from "axios";
import Delete from "./Delete";
import UpdateList from "./UpdateList";

const TaskList = (props) => {
// use state array for show task on todo app
  const [tasks, setTasks] = useState([]);
  
  // get task form data base using getTask function 
  const getTask = async () => {
  
      const res = await axios.get("https://my-todo-list-server.onrender.com/getalltodos")
      setTasks(res.data);
  
  };

  // use effect for getTask function calls karne ke liye
  useEffect(() => {
    getTask();
  }, [props.refresh]);

  return (
    
    <div className="w-96  mt-5">
      <ul className="space-y-3">
           {/*  tasks show karega tasks array se  */}
        {tasks.map((task, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between  p-3 rounded shadow"
          >
            {/* update task or delete task components */}
            <UpdateList task={task} refreshTasks={props.refreshTasks} />
            <Delete id={task._id} refreshTasks={props.refreshTasks} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
