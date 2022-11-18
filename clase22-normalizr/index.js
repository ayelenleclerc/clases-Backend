const { normalize, denormalize, schema } = require("normalizr");
const util = require("util");

// const blogpost = {
//   id: 1,
//   title: "My blog post",
//   description: "Short blogpost description",
//   content: "Hello world",
//   author: {
//     id: 1,
//     name: "John Doe",
//   },
//   comments: [
//     {
//       id: 1,
//       commenter: {
//         id: 2,
//         name: "Rodrigo Gonzalez",
//       },
//       content: "Nice post!",
//     },
//     {
//       id: 2,
//       commenter: {
//         id: 3,
//         name: "Fernando Gimenez",
//       },
//       content: "I totally agree with you!",
//     },
//   ],
// };
// /**
//  *  Entities :
//  * 1. Post > post
//  * 2. author >user
//  * 3. commenter > user
//  * 4. comment >comment
//  *  Siempre se crean los esquemas de adentro hacia afuera... de menor a mayor, lo que seria que el esquema del post seria el ultimo o esquema global
//  */

// // definimos un esquema para la entidad user

// const userSchema = new schema.Entity("user");

// // definimos un esquema para la entidad comment

// const commentSchema = new schema.Entity("comment", {
//   commenter: userSchema,
// });

// // definimos un esquema para la entidad Post
// const postSchema = new schema.Entity("post", {
//   author: userSchema,
//   comments: [commentSchema],
// });

// // normalizar el esquema

// const normalizedBlogpost = normalize(blogpost, postSchema);
// console.log(util.inspect(normalizedBlogpost, false, 12, true));

// console.log("Objeto Originar ===> ", JSON.stringify(blogpost).length);
// console.log(
//   "Objeto Normalizado ===> ",
//   JSON.stringify(normalizedBlogpost).length
// );

const originalData = {
  id: "999",
  posts: [
    {
      id: "123",
      author: {
        id: "1",
        nombre: "Pablo",
        apellido: "Perez",
        DNI: "20442654",
        direccion: "CABA 123",
        telefono: "1567876547",
      },
      title: "My awesome blog post",
      comments: [
        {
          id: "324",
          commenter: {
            id: "2",
            nombre: "Nicole",
            apellido: "Gonzalez",
            DNI: "20442638",
            direccion: "CABA 456",
            telefono: "1567811543",
          },
        },
        {
          id: "325",
          commenter: {
            id: "3",
            nombre: "Pedro",
            apellido: "Mei",
            DNI: "20446938",
            direccion: "CABA 789",
            telefono: "1567291542",
          },
        },
      ],
    },
    {
      id: "1123",
      author: {
        id: "2",
        nombre: "Nicole",
        apellido: "Gonzalez",
        DNI: "20442638",
        direccion: "CABA 456",
        telefono: "1567811543",
      },
      title: "My awesome blog post",
      comments: [
        {
          id: "1324",
          commenter: {
            id: "1",
            nombre: "Pablo",
            apellido: "Perez",
            DNI: "20442654",
            direccion: "CABA 123",
            telefono: "1567876547",
          },
        },
        {
          id: "1325",
          commenter: {
            id: "3",
            nombre: "Pedro",
            apellido: "Mei",
            DNI: "20446938",
            direccion: "CABA 789",
            telefono: "1567291542",
          },
        },
      ],
    },
    {
      id: "2123",
      author: {
        id: "3",
        nombre: "Pedro",
        apellido: "Mei",
        DNI: "20446938",
        direccion: "CABA 789",
        telefono: "1567291542",
      },
      title: "My awesome blog post",
      comments: [
        {
          id: "2324",
          commenter: {
            id: "2",
            nombre: "Nicole",
            apellido: "Gonzalez",
            DNI: "20442638",
            direccion: "CABA 456",
            telefono: "1567811543",
          },
        },
        {
          id: "2325",
          commenter: {
            id: "1",
            nombre: "Pablo",
            apellido: "Perez",
            DNI: "20442654",
            direccion: "CABA 123",
            telefono: "1567876547",
          },
        },
      ],
    },
  ],
};

const print = (objeto) => console.log(util.inspect(objeto, false, 12, true));

// definimos un esquema para la entidad user

const user = new schema.Entity("users");

// definimos un esquema para la entidad comment

const comment = new schema.Entity("comments", {
  commenter: user,
});

// definimos un esquema para la entidad article
const article = new schema.Entity("articles", {
  author: user,
  comments: [comment],
});

// definimos un esquema para la entidad Post
const posts = new schema.Entity("posts", {
  posts: [article],
});
console.log("<=== Objeto Original ====> ");
console.log(JSON.stringify(originalData).length);

console.log("<=== Objeto Normalizado ====> ");
const normalizedData = normalize(originalData, posts);
print(normalizedData);
console.log(" Objeto Normalizado==> ", JSON.stringify(normalizedData).length);

console.log("<=== Objeto Denormalizado ====> ");
const denormalizedData = denormalize(
  normalizedData.result,
  posts,
  normalizedData.entities
);
print(normalizedData);
console.log(" Objeto Original==> ", JSON.stringify(originalData).length);
console.log(
  " Objeto Denormalizado==> ",
  JSON.stringify(denormalizedData).length
);
