// const parrafo = document.getElementById("parrafo");
// const parrafos = document.getElementsByTagName("p");

// const destacados = document.getElementsByClassName("destacado");

// for (let i = 0; i < destacados.length; i++) {
//   console.log(destacados[i]);
// }

// ---

// const parrafo = document.querySelector("p.destacado:nth-child(3)");

// const parrafos = document.querySelectorAll("main p");

// parrafos.forEach((parrafo) => console.log(parrafo));

// ---

// const section = document.createElement("section");
// const h2 = document.createElement("h2");
// h2.textContent = "Seccion 2";
// section.appendChild(h2);

// document.querySelector("body").appendChild(section);

document.querySelector("body").innerHTML += `
    <section>
        <h2>Seccion 2</h2>
    </section>
`;

// document.querySelector("footer").innerHTML += '<p id="nuevo">Hola</p>';
