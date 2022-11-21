const express = require("express");
const session = require("express-session");
const adminAuth = require("./middlewares/adminAuth");
const auth = require("./middlewares/auth");

const PORT = process.env.PORT || 8080;

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(
  session({
    secret: "top-secret-51", // Cada session se guarda de manera unica
    resave: false, //por cada llamada fuerza que se guarden los datos
    saveUninitialized: false, //si no hay session activa no guarda nada, si esta en true guarda un objeto vacio
  })
);

//templates
app.set("views", "./views");
app.set("view engine", "ejs");

//routes
// app.get("/setSession", (req, res) => {
//   //siempre se usa el req.
//   req.session.user = "jorelmalo";
//   req.session.password = "1234";
//   req.session.admin = false;
//   res.send("OK");
// });

// app.get("/getSession", (req, res) => {
//   //siempre se usa el req.
//   res.send(req.session.user + req.session.admin);
// });

// app.get("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) return res.send(err);
//     res.redirect("/");
//   });
// });

app.get("/", (req, res) => {
  if (req.session?.user) {
    const user = req.session.user;
    const isAdmin = req.session.admin;
    return res.render("profile", { user, isAdmin });
  }
  return res.render("index");
});

app.post("/register", (req, res) => {
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  req.session.user = userEmail;
  req.session.password = userPassword;
  req.session.admin = userEmail.split("@")[1].includes("admin") ?? false;
  res.redirect("/profile");
});

app.get("/profile", auth, (req, res) => {
  const user = req.session.user;
  const isAdmin = req.session.admin;
  res.render("profile", { user, isAdmin });
});

app.get("/admin", adminAuth, (req, res) => {
  res.render("admin");
});

app.get("/unauthorized", (req, res) => {
  res.render("unauthorized");
});

app.get("/logout", auth, (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.send(err);
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log("Server is up and running on port: ", PORT);
});
