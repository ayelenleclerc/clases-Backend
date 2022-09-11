const express = require("express");
const path = require("path");
const apiRoutes = require("./routers/app.routers");
const loggerMiddleware = require("./middlewares/logger");
const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(loggerMiddleware);

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./nav-app/index.html"));
// });
// app.get("/styel.css", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./nav-app/style.css"));
// });
// app.get("/browser-app.js", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./nav-app/browser-app.js"));
// });

// app.get("/logo.svg", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./nav-app/logo.svg"));
// });

// Routes
app.use("/api", apiRoutes);

const connectedServer = app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.error("Error: ", error);
});
