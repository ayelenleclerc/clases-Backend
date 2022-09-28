//protocolo HTTP
//sondeo =>polling: Este concepto funciona bien para la mayoria de los casos en la que nosotros necesitamos obtener data que no sepamos a ciencia cierta cuando va a estar disponible. Entonces si lo queremos resolver netamente con http, cuando algun dispositivo no admite de socket. Consiste en hacer un loop infinito con setInterval, realizando peticiones constantemente cada x segundos, al servidor preguntando si hay data nueva disponible.

// setInterval => la forma más normal de tener polling. para saber lo mas rapido posible si hay data disponible al servidor. pero no es recomendable.
// asi se vería en código o pseudocodigo:
//una peticion por usuario al servidor.
const POLL_RATE = 500; //tasa de sondeo

setInterval(async () => {
  const messages = await fetch("https://api.chat-app.com/messages");
}, POLL_RATE);

//así siempre vamos a tener la data actualizada con delay de 500 milisegndos, no es automática. Hay algunos inconvenientes. ¿como se cuantos segundos es el tiempo adecuado para tener las peticiones optimas?¿No deberia depender del tiempo de actualizacion de la data del servidor y no de las peticiones al servidor?
//la solucion es acercarse a la solucion pero nunca vamos a tener la solucion sea el adecuado, o perfecto. siempre va a haber un retraso. y esto no es optimo.
//Necesitariamos servidores muy robustos para soportar tantas peticiones, y por lo tanto seria muy caro.

//para eso tenemos los SOCKETS.

//IP SOCKETS (Internet Protocol Socket)
// Datagram  o UDP socket = eliminan la latencia
//TCP sockets de donde se derivan los websocket = transferencia de datos por internet.

// protocolo HTTP, esta construido a base de los websocket. COMUNICACION UNIDIRECCIONAL cliente-servidor.

//WEBSOCKETS = son una funcionalidad de javascript que nos permite una COMUNICACION  BIDIRECCIONAL entre un servidor y un navegador.
