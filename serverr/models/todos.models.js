const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  taskName: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = todoModel = mongoose.model("tasks", todoSchema);
