//NOTA: El número es aleatorio entre 1 y 10
const queNumeroEs = Math.floor(Math.random() * 10) + 1;

let intentos = 3;

while (intentos > 0) {
  const adivinar = parseInt(prompt("Adiviná un número entre 1 y 10:"));
  if (adivinar === queNumeroEs) {
    alert("Muy bien, adivinaste el número correcto.");
    break;
  } else {
    intentos--;

    if (intentos > 0) {
      alert(`El número es incorrecto Te quedan ${intentos} intento(s).`);
    } else {
      alert(`¡Perdiste! El número correcto era ${queNumeroEs}.`);
    }
  }
}
