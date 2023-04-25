class Usuario {
  constructor(username, email, admin) {
    this.username = username;
    this.email = email;
    this.admin = admin;
  }

  //   saludar = () => {
  //     console.log("Hola " + this.username);
  //   };
  saludar() {
    console.log("Hola " + this.username);
  }
}

const usuarios = [];

const usuario1 = new Usuario("User 1", "x@x.com", false);
// usuario1.nombre = "Juan";
// delete usuario1.email;
// usuario1.saludar();
usuarios.push(usuario1);

const usuario2 = new Usuario("User 2", "y@y.com", true);
usuarios.push(usuario2);

const usuario3 = new Usuario("User 3", "z@z.com", false);
usuarios.push(usuario3);

console.log(usuarios[1].username);

const usuario = usuarios.find((usuario) => usuario.email == "y@y.com");
console.log(usuario);
