//protocolo HTTP
//sondeo =>polling: cando no sabemos cuando vamos a tener una respuesta.

// setInterval => la forma más normal de tener polling. para saber lo mas rapido posible si hay data disponible al servidor. pero no es recomendable.
//

const POLL_RATE = 500; //sondeo

setInterval(async () => {
  const messages = await fetch("https://api.chat-app.com/messages");
}, POLL_RATE);
