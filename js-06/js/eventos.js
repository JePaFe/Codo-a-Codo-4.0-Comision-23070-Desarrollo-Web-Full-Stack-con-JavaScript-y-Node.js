const saludar = () => console.log("Hola");

const h1 = document.querySelector("h1");

// h1.onclick = () => console.log("Click en h1");

h1.addEventListener("click", () => {
  console.log("Hola de h1");
});

// ---

// const enlace = document.querySelector("a");
// enlace.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("Click en enlace");
//   window.location = e.target.href;
// });

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombreError = document.querySelector("#nombre-error");
  nombreError.textContent = "";

  let error = false;

  const nombre = document.querySelector("#nombre");
  if (nombre.value == "") {
    error = true;
    nombreError.textContent = "El nombre es obligatorio";
  }

  if (!error) {
    e.target.submit();
  }
});
