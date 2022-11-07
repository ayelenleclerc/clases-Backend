// el metodo describe, es nativo de js, lleva 2 parametros, un strign con el nombre del test, algo que identifique los test  que van a ir dentro, y un callback con los test en si
// aca podemos user supertest o jest -- y el otro metodo principal va a ser test o it tambien recibe dos parametros, un strign con el nombre del caso como tal y un callback es donde empezamos a realizar las pruebas o asersiones.

// para realizar las pruebas a un servidor entra en juego Supertest, vamos a usar el collback asincrono., porque hacemos peticiones asincronas.
//El metodo request tiene como parametro un servidor, el que queremos probar, entonces vamos a  definir un servidor,

const request = require("supertest");
const app = require("./app");

describe("api rest test definition", () => {
  test("Should respond with status 200 and 'Hello Everyone' message", async () => {
    const response = await request(app).get("/"); // aca tenemos la respuesta de esa peticion '/' a ese servidor 'app'
    //para realizar las aserciones en jest usamos el metodo expect(), lo que pasamos como parametro es lo que esperamos sea verdadero
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello Everyone");
  });
});
