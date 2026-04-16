function gerarRotina() {
  let horas = parseInt(document.getElementById("horas").value);
  let objetivo = document.getElementById("objetivo").value;
  let resultado = "";

  if (!horas || horas <= 0) {
    resultado = "⚠️ Insere um número válido de horas.";
  } else {
    for (let i = 0; i < horas; i++) {
      resultado += `⏰ Hora ${i + 1}: ${objetivo}\n`;
    }
  }

  document.getElementById("resultado").innerText = resultado;
}
