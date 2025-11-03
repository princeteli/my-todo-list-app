const exp = require("express");
const dotenv = require("dotenv");
const cors = require('cors')
dotenv.config()
const connectDB  = require("./config/db");
const todoRouter = require("./routes/todos.routes")
const app = exp();
connectDB()

app.use(cors())
app.use(exp.json());
app.use(exp.urlencoded())
app.use('/',todoRouter)


app.listen(3000, () => {
  console.log("server running on -> http://localhost:3000");
});
