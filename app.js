// app.js - Calculadora en consola

console.log("Bienvenido a la calculadora en JavaScript");
console.log("Escribe en la consola:");
console.log("  sumar(a, b)       - Suma");
console.log("  restar(a, b)      - Resta");
console.log("  multiplicar(a, b) - Multiplicación");
console.log("  dividir(a, b)     - División");
console.log("  historial         - Muestra el historial");
console.log("  calculadora()     - Modo interactivo");

let historial = [];

function sumar(a, b) {
  let resultado = a + b;
  console.log(a + " + " + b + " = " + resultado);
  historial.push(a + " + " + b + " = " + resultado);
  return resultado;
}

function restar(a, b) {
  let resultado = a - b;
  console.log(a + " - " + b + " = " + resultado);
  historial.push(a + " - " + b + " = " + resultado);
  return resultado;
}

function multiplicar(a, b) {
  let resultado = a * b;
  console.log(a + " * " + b + " = " + resultado);
  historial.push(a + " * " + b + " = " + resultado);
  return resultado;
}

function dividir(a, b) {
  if (b === 0) {
    console.log("Error: No se puede dividir por cero");
    alert("¡Error! revisar y reintentar.");
    return "Error";
  }
  let resultado = a / b;
  console.log(a + " / " + b + " = " + resultado);
  historial.push(a + " / " + b + " = " + resultado);
  return resultado;
}

function calculadora() {
  let num1 = Number(prompt("Ingresá el primer número:"));
  let num2 = Number(prompt("Ingresá el segundo número:"));

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: ingresá números válidos.");
    alert("¡Error! revisar y reintentar.");
    return;
  }

  console.log("Resultados:");
  sumar(num1, num2);
  restar(num1, num2);
  multiplicar(num1, num2);
  dividir(num1, num2);

  console.log("Escribe 'historial' para ver todas las operaciones.");
}
