// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));
let num3 = parseInt(prompt("Introduce el tercer número:"));
if (num1 > num2 && num1 > num3) {
  document.writeln("El primer número es mayor: " + num1);
} else if (num2 > num1 && num2 > num3) {
  document.writeln("El segundo número es mayor: " + num2);
} else if (num3 > num1 && num3 > num2) {
  document.writeln("El tercer número es mayor: " + num3);
}
