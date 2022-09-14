const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/api/sumar/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  res.json({ resultado: +num1 + +num2 });
});

app.get("/api/sumar", (req, res) => {
  const { num1, num2 } = req.query;
  res.json({ resultado: +num1 + +num2 });
});

app.get("/api/operacion/:op", (req, res) => {
  const { op } = req.params;
  res.json({ resultado: eval(op) });
});

app.post("/api", (req, res) => {
  res.send("OK => " + req.method);
});

app.put("/api", (req, res) => {
  res.send("OK => " + req.method);
});

app.delete("/api", (req, res) => {
  res.send("OK => " + req.method);
});

const server = app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});

server.on("error", (error) => console.log(error.message));
