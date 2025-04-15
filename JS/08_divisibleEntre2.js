//Escribe un programa que pida un número y diga si es divisible por 2
let num = parseInt(prompt("Introduce un número: "));
if (num % 2 === 0) {
    document.writeln(num + " es divisible entre 2.");
}else if (num % 2 !== 0){
   document.writeln(num + " no es divisible entre 2.");
}