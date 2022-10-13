// const constants = require('./constants');
const { P1, P2 } = require("./constants");
const saludar = require("./utils");

saludar(P1);
saludar(P2);

// const obj = { name: "jorge"};

// obj.lastname = "Malo"

// console.log(obj)
const chalk = require("chalk");

console.log(chalk.bold.yellow("Hola a todos"));
