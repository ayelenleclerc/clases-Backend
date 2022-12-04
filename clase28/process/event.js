// process.on("beforeExit", (code) => {
//   let i = 0;
//   setInterval(() => {
//     console.log(++i);
//   }, 1000);
//   console.log("El codigo es => ", code); // codigo 0 todo esta bien
// });
// process.exit(); siempre tiene prioridad ante todo

// process.on("exit", (code) => {
//   console.log("Chao =>", code);
// });

// process.exit();

// process.on("uncaughtException", (error) => {
//   console.log(" Excepcion recogida => ", error);
// });

// process.on("exit", (code) => {
//   console.log("Chao =>", code);
// });
// console.log("Hola a Toodos");
// noExisto();
