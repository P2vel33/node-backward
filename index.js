const express = require("express");

const app = express();
app.use(express.json());
const name = "HUI";

app.get("/", (req, res) => {
  res.send("<h1>HELLO EXPRESS</h1>");
});
app.get("/hello/:name", (req, res) => {
  res.send(`<h1>HELLO ${req.params.name ?? name}</h1>`);
});
app.post("/hello", (req, res) => {
  console.log(req.body);
  res.status(201).send(req.body);
});
app.get("/goodbye", (req, res) => {
  res.send(`<h1>goodbye ${req.params.name ?? name}</h1>`);
});
app.listen(5555);
