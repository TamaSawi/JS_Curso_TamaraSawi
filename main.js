//NOTA: El número es aleatorio entre 1 y 10

const queNumeroEs = Math.floor(Math.random() * 10) + 1;
let intentos = 3;

while (intentos > 0) {
  const adivinar = parseInt(prompt("Adiviná un número entre 1 y 10:"));

  const resultado = verificarAdivinanza(adivinar, queNumeroEs);
  alert(resultado);

  if (adivinar === queNumeroEs) {
    break;
  } else {
    intentos--;

    if (intentos > 0) {
      alert(`Te quedan ${intentos} intento(s).`);
    } else {
      alert(`¡Perdiste! El número correcto era ${queNumeroEs}.`);
    }
  }
}

function verificarAdivinanza(adivinar, queNumeroEs) {
  if (adivinar === queNumeroEs) {
    return "Muy bien, adivinaste el número correcto.";
  } else {
    return "El número es incorrecto.";
  }
}
