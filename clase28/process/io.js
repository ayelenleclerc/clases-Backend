// process.stdout
// process.stdin

// process.stdout.write("Hola");
const preguntas = ["Cual es tu nombre?", "Cual es tu apellido?"];
const respuestas = [];

const pregunta = (i) => {
  process.stdout.write(`\n ${preguntas[i]}`);
  process.stdout.write(`: `);
};

process.stdin.on("data", (data) => {
  console.log("Recibi data", data);
  respuestas.push(data.toString().trim());
  if (respuestas.length < preguntas.length) {
    pregunta(respuestas.length);
  } else {
    process.exit();
  }
});
