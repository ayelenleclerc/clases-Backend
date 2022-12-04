// THREAD POLL (GRUPO DE SUBPROCESOS)
//LIBRERIA Libuv (buscar information)
// objeto process

console.log("Directorio actual de trabajo => ", process.cwd());
console.log("Id del proceso => ", process.pid);
console.log("Versión de Node => ", process.version);
console.log("Título del proceso => ", process.title);
console.log("Sistema operativo => ", process.platform);
console.log("Uso de la memoria => ", process.memoryUsage());
console.log("Exec Path => ", process.execPath());

// const startTime = Date.now();
// while(Date.now() - startTime < 60000){ }

// const startTime = Date.now();
// while (Date.now() - startTime < 60000) {
//   if (Date.now() - startTime >= 5000) {
//     process.exit();
//   }
// }
