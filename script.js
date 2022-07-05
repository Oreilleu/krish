// Récupérer les deux champs
const eurInput = document.getElementById("euro");
const cfaInput = document.getElementById("cfa");

eurInput.addEventListener("input", () => {
  const eur = eurInput.value;
  const eurNumber = parseFloat(eur);
  const taux = cfaInput.getAttribute("data-taux");
  const tauxNumber = parseFloat(taux);
  const newConvert = eurNumber * tauxNumber;
  const newConvertText = newConvert.toFixed(2);
  cfaInput.value = newConvertText;
});

cfaInput.addEventListener("input", () => {
  const cfa = cfaInput.value;
  const cfaNumber = parseFloat(cfa);
  const taux = cfaInput.getAttribute("data-taux");
  const tauxNumber = parseFloat(taux);
  const newConvert = cfaNumber / tauxNumber;
  const newConvertText = newConvert.toFixed(2);
  eurInput.value = newConvertText;
});
