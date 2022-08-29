const mostrarLetras = (palabra, cb) => {
  let letra = 0;
  const imprime = setInterval(() => {
    if (letra < palabra.length) {
      console.log(palabra[letra]);
      letra++;
    } else {
      clearInterval(imprime);
      cb();
    }
  }, 1000);
};
const fin = () => console.log("terminé");

mostrarLetras("H", () => {
  mostrarLetras("o", () => {
    mostrarLetras("l", () => {
      mostrarLetras("a", () => {
        fin();
      });
    });
  });
});
