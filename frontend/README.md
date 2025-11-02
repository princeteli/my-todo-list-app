first i am creating a frontend folder
then i am creating a react application in side a folder using vite - npm create vite@latest.
i am setup tailwind css in side vite.config.js
then i am creating a components folder in side src folder


HEADER.JSX
first i create Header.jsx file in side components folder
in this header file user add task using input field and add button
const [Input, setInput] = useState("");
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
user click on add task button then axios post request to api endpoint will add in side todo list 
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


TASK.JSX
then in side header file user add task using input field and add button.
then i am create Task.jsx file in side components folder  task file call axios get request to api endpoint and task file show all task in side todo list div.
const [tasks, setTasks] = useState([]);
const refreshTasks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/getalltodo");
    setTasks(response.data);
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};


DELETE.JSX
then in side header file user add task using input field and add button.
then i am create Delete.jsx file in side components folder  delete file call axios delete request to api endpoint and delete file delete task in side todo list div.


UPDATE.JSX
then in side header file user add task using input field and add button.
then i am create Update.jsx file in side components folder  update file call axios put request to api endpoint and update file update task in side todo list div.


challenges i am face during this project
i am add task but it not showing in side todo list evary time i reload page then task show in side todo list. delete task but it not delete in side todo list evary time i reload page then task add delete and update in side todo list
i am fix it using refreshTasks usestate variable.
task add delete and update any time reload page then task add delete and update in side todo list