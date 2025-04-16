// conversor a celsius

let gradosFahrenheit = parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit: "));
let gradosCelsius = (gradosFahrenheit-32) * 5/9;
document.writeln(`Los ${gradosFahrenheit}° fahrenheit a Celsius es ${gradosCelsius}°` )