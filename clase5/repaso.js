const f1 = () => console.log("f1");

const f2 = () => console.log("f2");

const f3 = () => console.log("f3");

const principal = () => {
  console.log("principal");

  setTimeout(f1, 50);
  setTimeout(f3, 30);

  new Promise((resolve, reject) => {
    resolve("promB");
  }).then((result) => console.log(result));

  new Promise((resolve, reject) => {
    setTimeout(() => resolve("promC"), 0);
  }).then((result) => console.log(result));

  new Promise((resolve, reject) => {
    resolve("promA");
  }).then((result) => console.log(result));

  f2();
};
principal();
