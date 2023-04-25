const usuario1 = {
  username: "User 1",
  email: "x@x.com",
};

// const saludar = function () {
//   console.log("Hola");
// };

const username = "User 2";

const usuario2 = {
  username,
  email: "y@y.com",
  admin: true,
  //   "Nombre completo": "Juan Garcia",
  //   saludar: () => {
  //     console.log("Hola!");
  //   },
  saludar() {
    console.log("Hola " + this.username);
  },
};

// usuario2.saludar = () => {
//   console.log("Hola " + this.username);
// };

usuario2.saludar();

// console.log(usuario2["Nombre completo"]);

// for (const key in usuario2) {
//   console.log(key, usuario2[key]);
// }

// delete usuario2.email;
// usuario2.nombre = "Juan";

// usuario2.username = "Usuario 2";

// console.log(usuario2.username);
// console.log(usuario2["username"]);
