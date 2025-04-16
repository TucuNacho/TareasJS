// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// Si no es divisible por ninguno de ellos, que lo indique también.

let numero = parseInt(prompt("Introduce un número: "));
if (numero % 2 === 0){
    document.writeln("El número es divisible por 2.");
}else if (numero % 3 === 0){
    document.writeln("El número es divisible por 3.");
}
else if (numero % 5 === 0){
    document.writeln("El número es divisible por 5.");
}
else if (numero % 7 === 0){
    document.writeln("El número es divisible por 7.");
}