/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    let precio1;
    let precio2;
    let precio3;
    let suma

    precio1 = perseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = perseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = perseInt(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3;

    do {
        alert
    } while (condition); { "tu suma da: " + suma }

}
function Promedio() {



}
function PrecioFinal() {
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let resultado;

    precio1 = perseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = perseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = perseInt(document.getElementById("txtIdPrecioTres").value);

    suma = (precio1 + precio2 + precio3) * 0.21;

    resultado = suma;

    alert = ("El precio Final " + resultado);
}

//     let precio1;
let precio2;
let precio3;
let suma;
let resultado;

precio1 = perseInt(document.getElementById("txtIdPrecioUno").value);
precio2 = perseInt(document.getElementById("txtIdPrecioDos").value);
precio3 = perseInt(document.getElementById("txtIdPrecioTres").value);

suma = (precio1 + precio2 + precio3) * 0.21;

resultado = suma;

alert = ("El precio Final " + resultado); //