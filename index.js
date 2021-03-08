const inputs = document.querySelectorAll("input");
const a = inputs[0];
const b = inputs[1];
const resultado = document.getElementById("resultado");
const btnSoma = document.getElementById("btnSoma");
btnSoma.addEventListener("click", function () {
  resultado.textContent = soma(a.value,b.value);
});
