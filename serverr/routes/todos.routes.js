const express = require("express");
const todos = require("../models/todos.models");
const router = express.Router();

router.get("/getalltodos", async (req, res) => {
  try {
    let task = await todos.find();
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send({
      message: "no task",
    });
  }
});

router.post("/createnewtodo", async (req, res) => {
  try {
    let newTask = req.body.task;
    let newTodo = await todos.create({
      taskName: newTask,
    });
    res.status(201).send({
      message: "add task done",
    });
  } catch (error) {
    res.status(400).send(
      {
        message: "task not add",
      },
      error
    );
  }
});

router.delete("/deletetodo/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let deleteTodo = await todos.findByIdAndDelete({ _id: id });
    res.status(201).send({
      message: "task delete done",
    });
  } catch (error) {
    res.status(400).send(
      {
        message: "task not add",
      },
      error
    );
  }
});


router.put("/updatetodo/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { completed } = req.body;

    const updatedTodo = await todos.findByIdAndUpdate(
      id,
      { completed: completed },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).send({ message: "Task not found" });
    }

    res.status(200).send({
      message: "Task status updated",
      data: updatedTodo,
    });
  } catch (error) {
    res.status(400).send({
      message: "Failed to update task status",
      error: error.message,
    });
  }
});


module.exports = router;
