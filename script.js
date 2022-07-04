// Récupérer les deux champs
const eurInput = document.getElementById("euro");
const cfaInput = document.getElementById("cfa");

// Assoce un évènement qui correspond au changement de la valeur du champ
// console.log(eurInput, cfaInput);

eurInput.addEventListener("input", () => {
  // Récupérer la valeur saisie par le user
  const eur = eurInput.value;

  // Convertir eur en Nombre
  const eurNumber = parseFloat(eur);

  // Récuperer le taux de change
  const taux = cfaInput.getAttribute("data-taux");
  console.log(taux);

  // Convertir le taux en nombre
  const tauxNumber = parseFloat(taux);

  // Calculer la nouvelle convertion
  const newConvert = eurNumber * tauxNumber;

  // Convertir le nouveau nombre en text avec 5 digit
  const newConvertText = newConvert.toFixed(2);

  // Mettre a jour le champ
  cfaInput.value = newConvertText;
});

cfaInput.addEventListener("input", () => {
  // Récupérer la valeur saisie par le user
  const cfa = cfaInput.value;

  // Convertir eur en Nombre
  const cfaNumber = parseFloat(cfa);

  // Récuperer le taux de change
  const taux = cfaInput.getAttribute("data-taux");
  console.log(taux);

  // Convertir le taux en nombre
  const tauxNumber = parseFloat(taux);

  // Calculer la nouvelle convertion
  const newConvert = cfaNumber / tauxNumber;

  // Convertir le nouveau nombre en text avec 5 digit
  const newConvertText = newConvert.toFixed(2);

  // Mettre a jour le champ
  eurInput.value = newConvertText;
});
