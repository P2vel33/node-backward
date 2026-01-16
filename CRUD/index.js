const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());

const idCounter = 1;

app.post("/", (req, res) => {
  res.status(201).send(db.createTask(req.body));
});

app.get("/", (req, res) => {
  res.status(200).send(db.readTasks());
});

app.delete("/:id", (req, res) => {
  db.deleteTask(req.params.id);
  res.sendStatus(205);
});

app.get("/:id", (req, res) => {
  res.status(200).send(db.readTask(req.params.id));
});

app.put("/:id", (req, res) => {
  res.status(200).send(db.updateTask(req.params.id, req.body));
});

app.listen(5555);
