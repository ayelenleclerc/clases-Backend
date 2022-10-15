import saludarYDarHora from "./utils.js"; //siempre que importemos desde modulos es importante poner la extension del archivo.
//si al importar el archivo cambio el nombre de la funcion por ejemplo saludar solo y la llamo con el mismo nombre, funciona de igual manera.

const giveTime = process.env.GIVE_TIME === "true";
saludarYDarHora("Ayelen", giveTime);
