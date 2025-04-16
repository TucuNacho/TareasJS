let largo = parseInt(prompt("Ingrese el largo del rectángulo:"));
let ancho = parseInt(prompt("Ingrese el ancho del rectángulo:"));

if (isNaN(largo) || isNaN(ancho) || largo <= 0 || ancho <= 0) {
    document.writeln("❌Error: El largo y el ancho deben ser números mayores a cero.<br>");
}else{

let perimetro = 2 * (largo + ancho);
let area = largo * ancho;
document.writeln("📏El perímetro del rectángulo es: " + perimetro + "<br>");
document.writeln("📐El área del rectángulo es: " + area + "<br>");
}