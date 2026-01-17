import express from "express";
import { createTask, deleteTask, readTask, readTasks, updateTask } from "./db";

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  const newTask = createTask(req.body);
  if (!newTask) {
    res.status(400);
  } else {
    res.status(201).send(newTask);
  }
});

app.get("/", (req, res) => {
  res.status(200).send(readTasks());
});

app.delete("/:id", (req, res) => {
  deleteTask(+req.params.id);
  res.sendStatus(205);
});

app.get("/:id", (req, res) => {
  const task = readTask(+req.params.id);
  res.status(200).send(task);
});

app.put("/:id", (req, res) => {
  const updTask = updateTask(+req.params.id, req.body);
  res.status(200).send(updTask);
});

app.listen(5555);
