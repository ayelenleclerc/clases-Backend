const app = require("./app");
const envConfig = require("./config");

const PORT = process.env.PORT || 8080;

const DATASOURSE_BY_ENV = {
  mongo: require("./models/containers/mongo.container"),
  firebase: require("./models/containers/firebase.container"),
};
const dataSource = DATASOURSE_BY_ENV[envConfig.DATASOURCE];

app.listen(PORT, () => {
  dataSource.connect().then(() => {
    console.log("Ready on port " + PORT);
    console.log("Connected to " + envConfig.DATASOURCE);
  });
});
