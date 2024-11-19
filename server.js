// TODO: this file :)
const express = require("express");
const app = express();
const employees = require("./employees");

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello employees!!");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  if (id < 0 || id >= employees.length) {
    res.status(404).send("There is no employee with that id.");
  } else {
    res.json(employees[id]);
  }
});


app.get("/employees/random", (req, res) => {
  
  res.json(employees[Math.floor(Math.random() * 10) + 1]);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});