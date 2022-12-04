const interval = setInterval(() => {
  let numeros = "";
  for (let i = 0; i < 7; i++) {
    numeros += Math.floor(Math.random() * 100 + 1) + " ";
  }
  console.log(numeros);
}, 1000);
