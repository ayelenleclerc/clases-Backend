const moment = require("moment");
const chalk = require("chalk");

const boldYellow = chalk.bold.yellow;
const boldGreen = chalk.bold.green;

moment.locale("es");
const today = moment();
const birthDate = moment("18/08/1992", "DD/MM/YYYY");
const years = today.diff(birthDate, "years");
const days = today.diff(birthDate, "days");

const message = `Hoy es ${boldYellow(today.format("DD [de] MMMM [del] YYYY"))}.
Nací el ${boldYellow(birthDate.format("DD [de] MMMM [del] YYYY"))}.
Desde mi nacimiento han pasado ${boldGreen(years)} años!
Desde mi nacimiento han pasado ${boldGreen(days)} dias!
`;

console.log(message);
