//Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt
// ingresar una frase de 5 caracteres

let frase = prompt("Introduce una frase: ");
document.writeln("tu frase es: " + frase);

if (frase.length > 0) {
  let letra0 = frase.charAt(0).toLowerCase();
  if (
    letra0 === "a" ||
    letra0 === "e" ||
    letra0 === "i" ||
    letra0 === "o" ||
    letra0 === "u"
  ) {
    document.writeln("La primera letra es una vocal: " + letra0);
  }
}

if (frase.length > 1) {
  let letra1 = frase.charAt(1).toLowerCase();
  if (
    letra1 === "a" ||
    letra1 === "e" ||
    letra1 === "i" ||
    letra1 === "o" ||
    letra1 === "u"
  ) {
    document.writeln("La segunda letra es una vocal: " + letra1);
  }
}

if (frase.length > 2) {
  let letra2 = frase.charAt(2).toLowerCase();
  if (

    letra2 === "e" ||
    letra2 === "i" ||
    letra2 === "o" ||
    letra2 === "u"
  ) {
    document.writeln("La tercera letra es una vocal: " + letra2);
  }
}

if (frase.length > 3) {
  let letra3 = frase.charAt(3).toLowerCase();
  if (
    letra3 === "a" ||
    letra3 === "e" ||
    letra3 === "i" ||
    letra3 === "o" ||
    letra3 === "u" 
  ) {
    document.writeln("La cuarta letra es una vocal: " + letra3);
  }
}

if (frase.length > 4) {
  let letra4 = frase.charAt(4).toLowerCase();
  if (
    letra4 === "a" ||
    letra4 === "e" ||
    letra4 === "i" ||
    letra4 === "o" ||
    letra4 === "u"
  ) {
    document.writeln("La quinta letra es una vocal: " + letra4);
  }
}
if (frase.length > 5) {
  let letra5 = frase.charAt(5).toLowerCase();
  if (
    letra5 === "a" ||
    letra5 === "e" ||
    letra5 === "i" ||
    letra5 === "o" ||
    letra5 === "u"
  ) {
    document.writeln("La sexta letra es una vocal: " + letra5);
  }
}
