function convert() {
  const exchangeRate = 166.87; // Tasa de cambio fija
  const brl = parseFloat(document.getElementById("brl").value);
  if (!isNaN(brl)) {
    const ars = brl * exchangeRate;
    document.getElementById("result").innerText = `Total en ARS: $${ars.toFixed(
      2
    )}`;
  } else {
    document.getElementById("result").innerText =
      "Por favor, introduce un monto válido.";
  }
}
