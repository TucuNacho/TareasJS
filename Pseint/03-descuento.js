//descontar el 15% del precio original si el precio es mayor a 1000

let precio = parseFloat(prompt("Ingrese el precio del producto: "));
let descuento = 0.15;
if (precio >= 1000) {
    nuevoPrecio= precio - (precio * descuento);
    document.writeln("El nuevo precio es: " + nuevoPrecio);
}