function gerarRotina() {
  let horas = document.getElementById("horas").value;
  let resultado = "";

  for (let i = 0; i < horas; i++) {
    resultado += `Hora ${i + 1}: Estudo ou trabalho\n`;
  }

  document.getElementById("resultado").innerText = resultado;
}
