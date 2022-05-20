var palabras = [
  "JAVA",
  "REACT",
  "RUBY",
  "PYTHON",
  "SQL",
  "HTML",
  "JSON",
  "VIRUS",
  "CSS",
  "NODE",
];

const btnGuardar = document.getElementById("guardar");
const ingresarPalabra = document.getElementById("textarea");

btnGuardar.addEventListener("click", () => {
  if (ingresarPalabra.value.length === 0) {
    alert("Ingrese una palabra");
  } else if (ingresarPalabra.value.length > 8) {
    alert("Solo se permite 8 caracteres");
  } else {
    palabras.push(ingresarPalabra.value.trim().toUpperCase());
    alert("La palabra se agrego con exito");

    let url = window.location.origin;
    location.href = `juego.html`;
  }
});
