//import moment from "moment";

//lo que sigue es la importacion de forma dinamica

let moment;
if (process.env.GIVE_TIME === "true") {
  const { default: momentLib } = await import("moment");
  moment = momentLib;
}
const saludarYDarHora = (nombre, giveTime) => {
  if (giveTime) {
    console.log(`Hola a todos, me llamo ${nombre}, un gusto saludarlos!`);
    const time = +moment().format("h");
    const dayTime =
      time > 0 && time <= 12 ? "mañana" : time <= 19 ? "tarde" : "noche";
    console.log(`Son las ${moment().format("HH:mm")} de la ${dayTime}`);
  }
};
export default saludarYDarHora;
