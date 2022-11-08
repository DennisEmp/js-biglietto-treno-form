const nome = document.getElementById("nome");
const km = document.getElementById("chilometri");
const eta = document.getElementById("eta");
const button = document.querySelector("button");

console.log(nome, km);

button.addEventListener("click", genera);

function genera() {
  document.getElementById("outputNome").innerHTML = nome.value;

  // CALCOLO PREZZO BIGLIETTO

  let totaleCorsa = km * 0.21;

  // variante minorenne con sconto 20%

  if (eta < 18) {
    totaleCorsa = totaleCorsa * 0.8;
  }

  // variante over 65 con sconto 40%

  else if (eta > 65) {
      totaleCorsa = totaleCorsa * 0.6;
  }

  // prezzo senza sconto

  else {
      totaleCorsa;
  }

  // max due decimali

  let fixedPrice = totaleCorsa.toFixed(2)

  document.getElementById("calcPrezzo").innerHTML = totaleCorsa;

}
