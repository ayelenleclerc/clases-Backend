class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  describir() {
    console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años!`);
  }
}
//las herramientas instaladas de manera local en el proyecto, se puede acceder a ellas mediante npx en consola. otra opcion es hacer un script en el package.json --> "build": "bebel index.js" y se accede con npm run build.
// para poder implementar babel de una manera correcta hay que definir un archivo de configuración : se define de dos formas
//1 - babel.config.js actua de manera global, esto quiere decir que aunque tengamos diferentes proyectos cada uno con su package.json, estas configuraciones van a servir para TODOS los proyectos, ademas como es un script de JS, se lo puede ejecutar logica de js en la configuración. es un archivo que se exporta como un objeto con las configuraciones de babel.

//2 - .babelrc en la ruta raiz del proyecto. Esta forma es la mas común,va a funcionar solo para el proyecto especifico.
