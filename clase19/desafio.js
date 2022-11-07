const mongoose = require("mongoose");
const StudentModel = require("./schemas/student.schema");

const DATABASE = "colegio";
const URI = `mongodb://localhost:27017/${DATABASE}`;

// const data = [
//   {
//     nombre: "Pedro",
//     apellido: "Mei",
//     edad: 21,
//     dni: "31155898",
//     curso: "1A",
//     nota: 7,
//   },
//   {
//     nombre: "Ana",
//     apellido: "Gonzalez",
//     edad: 32,
//     dni: "27651878",
//     curso: "1A",
//     nota: 8,
//   },
//   {
//     nombre: "José",
//     apellido: "Picos",
//     edad: 29,
//     dni: "34554398",
//     curso: "2A",
//     nota: 6,
//   },
//   {
//     nombre: "Lucas",
//     apellido: "Blanco",
//     edad: 22,
//     dni: "30355874",
//     curso: "3A",
//     nota: 10,
//   },
//   {
//     nombre: "María",
//     apellido: "García",
//     edad: 36,
//     dni: "29575148",
//     curso: "1A",
//     nota: 9,
//   },
//   {
//     nombre: "Federico",
//     apellido: "Perez",
//     edad: 41,
//     dni: "320118321",
//     curso: "2A",
//     nota: 5,
//   },
//   {
//     nombre: "Tomas",
//     apellido: "Sierra",
//     edad: 19,
//     dni: "38654790",
//     curso: "2B",
//     nota: 4,
//   },
//   {
//     nombre: "Carlos",
//     apellido: "Fernández",
//     edad: 33,
//     dni: "26935670",
//     curso: "3B",
//     nota: 2,
//   },
//   {
//     nombre: "Fabio",
//     apellido: "Pieres",
//     edad: 39,
//     dni: "4315388",
//     curso: "1B",
//     nota: 9,
//   },
//   {
//     nombre: "Daniel",
//     apellido: "Gallo",
//     edad: 25,
//     dni: "37923460",
//     curso: "3B",
//     nota: 2,
//   },
// ];
// const promisesArray = data.map((student) => {
//   return new StudentModel(student).save();
// });

(async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connected");

    // await Promise.all(promisesArray);
    // console.log("Data inserted successfully");

    //punto a
    const estudiantes = await StudentModel.find().sort({ nombre: 1 });
    console.log(estudiantes);

    //punto b

    const masJoven = await StudentModel.find().sort({ edad: 1 }).limit(1);
    console.log(masJoven);

    //punto c
    const estCurso2A = await StudentModel.find({ curso: "2A" });
    console.log(estCurso2A);

    //punto d
    const segundoMasJoven = await StudentModel.find()
      .sort({ edad: 1 })
      .skip(1)
      .limit(1);
    console.log(segundoMasJoven);

    //punto e
    const listaNombres = await StudentModel.find(
      {},
      { nombre: 1, apellido: 1, curso: 1 }
    ).sort({ apellido: -1 });

    console.log(listaNombres);

    //punto f
    const los10 = await StudentModel.find({ nota: 10 });
    console.log(los10);

    //punto g y h lo vemos mas adelante
  } catch (error) {
    console.log(error.message);
  }
})();
