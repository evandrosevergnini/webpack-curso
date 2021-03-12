import { soma } from "./assets/js/calculadora";
import "./assets/scss/main.scss";
import Logo from "./assets/images/logo.png";

const inputs = document.querySelectorAll("input");
const a = inputs[0];
const b = inputs[1];
const resultado = document.getElementById("resultado");
const btnSoma = document.getElementById("btnSoma");
btnSoma.addEventListener("click", function () {
  resultado.textContent = soma(a.value, b.value);
});

// Manipulando imagem como um módulo
const logo = new Image();
logo.src = Logo;
document.querySelector("header h1").appendChild(logo);
