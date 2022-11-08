const nome = document.getElementById("nome");
const km = document.getElementById("chilometri");
const eta = document.getElementById("eta");
const button = document.querySelector("button");

console.log(nome, km);

button.addEventListener("click", genera);

function genera(event) {
  event.preventDefault()
  document.getElementById("outputNome").innerHTML = nome.value;

  // CALCOLO PREZZO BIGLIETTO

  let totaleCorsa = km.value * 0.21;
  let sconto;

  console.log("eta", eta)
  console.log("eta value", eta.value)

  // variante minorenne con sconto 20%

  if (eta === "minore") {
    sconto = (totaleCorsa * 20) / 100;
  }

  // variante over 65 con sconto 40%

  else if (eta === "over65") {
    sconto = (totaleCorsa * 40) / 100;
  }

  // prezzo senza sconto

  else {
      totaleCorsa;
  }

  // max due decimali

  let fixedPrice = totaleCorsa.toFixed(2)

  document.getElementById("calcPrezzo").innerHTML = totaleCorsa;
  
  let numCarrozza = Math.floor(Math.random() * 10) + 1;
  document.getElementById("carrozza").innerHTML = numCarrozza;
  
  let codice = Math.floor(Math.random() * 10000) + 1;
  document.getElementById("outputCodice").innerHTML = codice;

};

let Reset =document.getElementById("reset")
Reset.addEventListener("click",
function (){
  document.getElementById("InfoBlock").reset();
  const yourticket = document.getElementById("boxOutput");
  yourTicket.style.display = "none";
  }
);