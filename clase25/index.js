const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("./middlewares/passport");

const env = require("./env.config");
const dbConfig = require("./db/config");
const apisRoutes = require("./routers/app.routers");
const MongoContainer = require("./models/containers/Mongodb.container");

const PORT = env.PORT || 8080;

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(
  session({
    name: "coder-session",
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: dbConfig.mongodb.connectTo("sessions"),
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Template engines
app.set("views", "./views");
app.set("view engine", "ejs");

// Routes
app.use(apisRoutes);

app.listen(PORT, async () => {
  MongoContainer.connect().then(() => {
    console.log("Connected to DB!");
    console.log("Server is up and running on port: ", +PORT);
  });
});
