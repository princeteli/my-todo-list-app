live server usl- https://my-todo-list-server.onrender.com/
first i create package.json file and install all dependencies and run server.js file .
then i  am create app.js file and require dependencies  
const exp = require("express");
const dotenv = require("dotenv");
const cors = require('cors')
dotenv.config()
const app = exp();



then i am connect mongodb  database 
const connectDB  = require("./config/db");
connectDB();
then i am create todos.routes file and require in app.js file



then i am create todos models file and require in todos.routes file and create routes file and require in app.js file and create all endpoints .

 Get all todos 
Endpoint : “https://loacalhost:3000/api/getalltodos”
Method : GET
Request Format : none 
Response : [
{  task : “gym ”}, {  task : “study”}, {  task : “buy new shirt”}
]
Explanation : in this route is user request on Api Endpoint and server  send it all todos task.

 Add Todo 
Endpoint : “https://localhost:3000/api/createnewtodo”
Method : POST
Request Format : {   task : “task Name ”}
Response : { message : ‘New task Add successful’}
Explanation : in this route is user request and send task on Api Endpoint and server  add task  in  todo list  task.


   3)Delete Todo 
Endpoint : “https://localhost:3000/api/deletetodo”
Method : DELETE
Request Format : { task : “task Name ”}
Response : { message : ‘ task Delete successfully ’}
Explanation : in this route is user request and send task name on Api Endpoint and server  delete this task  inside to the   todo list .

4)update todos 
Endpoint : “https://localhost:3000/api/updatetodo”
Method : PUT
Request Format : { complete:true}
Response : { message : ‘task complete successfully’}
Explanation : in this route is user request and sendold  task and also send new task  on Api Endpoint and server  update old task  with new task in  todo list .



 necessary environment variables or configuration are stored in the .env file.
 MONGO_URI=mongodb+srv://prince:JpgmZan2bBAL8f3z@todos.t1iu5lk.mongodb.net/?appName=todos


challenges i am face during this project 
my mongo DB connection issue my data base not working i am face this issue more than 10 times 
then i am fix it using google search and find solution some time mongo db altals have network access issues and some time mongo db server is not running then i allow to network access and restart mongo db server and i am able to connect my data base. 

