"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var Persona = /*#__PURE__*/ (function () {
  function Persona(nombre, edad) {
    _classCallCheck(this, Persona);
    this.nombre = nombre;
    this.edad = edad;
  }
  _createClass(Persona, [
    {
      key: "describir",
      value: function describir() {
        console.log(
          "Me llamo "
            .concat(this.nombre, " y tengo ")
            .concat(this.edad, " a\xF1os!")
        );
      },
    },
  ]);
  return Persona;
})();

//las herramientas instaladas de manera local en el proyecto, se puede acceder a ellas mediante npx en consola. otra opcion es hacer un script en el package.json --> "build": "bebel index.js" y se accede con npm run build.
// para poder implementar babel de una manera correcta hay que definir un archivo de configuración : se define de dos formas
//1 - babel.config.js actua de manera global, esto quiere decir que aunque tengamos diferentes proyectos cada uno con su package.json, estas configuraciones van a servir para TODOS los proyectos, ademas como es un script de JS, se lo puede ejecutar logica de js en la configuración. es un archivo que se exporta como un objeto con las configuraciones de babel.
//2 - .babelrc en la ruta raiz del proyecto. Esta forma es la mas común,va a funcionar solo para el proyecto especifico.
