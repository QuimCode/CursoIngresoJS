/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {

    let precioUno;
    let precioDos;
    let precioTres;
    let suma

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = precioUno + precioDos + precioTres;

    mensaje = "La suma de todos sus productos es ... " + suma;
    alert(mensaje);

    /*console.log(suma);*/
}

function Promedio() {

    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let promedio;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = precioUno + precioDos + precioTres;
    promedio = suma / 3;

    mensaje = "El promedio de los precions es " + promedio;
    alert(mensaje);

    /*console.log("El promedio de los precions es " + promedio);*/
}

function PrecioFinal() {

    let precioUno;
    let precioDos;
    let precioTres;
    let IVA = 1.21;
    let suma;
    let finalIva;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = precioUno + precioDos + precioTres;
    finalIva = suma * IVA;

    mensaje = "El precio final con el 21% de IVA es ... " + finalIva;
    alert(mensaje);
}
