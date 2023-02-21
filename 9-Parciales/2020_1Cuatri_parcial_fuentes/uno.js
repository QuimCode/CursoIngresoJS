/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
//de cada una debo obtener los siguientes datos:
//el tipo (validar "barbijo" , "jabón" o "alcohol") ,
//el precio (validar entre 100 y 300),
//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
//la Marca y el fabricante.
//Se debe Informar al usuario lo siguiente:
//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
//b) Del tipo con mas unidades, el promedio por compra
//c) Cuántas unidades de jabones hay en */

function mostrar() {

    let precioAlcoholBarato;
    let cantidadAlcoholBarato;
    let fabricanteAlcoholBarato;

    let acumuladorCantidadAlcohol;
    let acumuladorCantidadJabon;
    let acumuladorCantidadBarbijo;

    let acumuladorPrecioAlcohol;
    let acumuladorPrecioJabon;
    let acumuladorPrecioBarbijo;

    let numeroAlcohol;
    let numeroJabon;
    let numeroBarbijo;

    let i;
    let cantidadProductos = 3;

    precioAlcoholBarato = 300;

    acumuladorCantidadAlcohol = 0;
    acumuladorCantidadJabon = 0;
    acumuladorCantidadBarbijo = 0;

    acumuladorPrecioAlcohol = 0;
    acumuladorPrecioJabon = 0;
    acumuladorPrecioBarbijo = 0;

    numeroAlcohol = 0;
    numeroJabon = 0;
    numeroBarbijo = 0;


    for (i = 0; i < cantidadProductos; i++) {
        let tipo = prompt("Ingrese el tipo de producto (A/B/J):");

        while (tipo != "A" && tipo != "B" && tipo != "J") {
            tipo = prompt("Código de producto incorrecto. Ingreselo correctamente (A/B/J):")
        }

        let precio = parseInt(prompt("Ingrese el precio de producto:"));
        let cantidad = parseInt(prompt("Ingrese la cantidad de producto:"));

        let marca = prompt("Ingrese la marca de producto:");
        let fabricante = prompt("Ingrese el fabricante de producto:");

        if (tipo == "A") {
            acumuladorCantidadAlcohol = acumuladorCantidadAlcohol + cantidad;
            acumuladorPrecioAlcohol = acumuladorPrecioAlcohol + precio;
            numeroAlcohol = numeroAlcohol + 1;

            if (precio < precioAlcoholBarato) {
                precioAlcoholBarato = precio;
                cantidadAlcoholBarato = cantidad;
                fabricanteAlcoholBarato = fabricante;
            }
        } else if (tipo == "B") {
            acumuladorCantidadBarbijo = acumuladorCantidadBarbijo + cantidad;
            acumuladorPrecioBarbijo = acumuladorPrecioBarbijo + precio;
            numeroBarbijo = numeroBarbijo + 1;
        } else if (tipo == "J") {
            acumuladorCantidadJabon = acumuladorCantidadJabon + cantidad;
            acumuladorPrecioJabon = acumuladorPrecioJabon + precio;
            numeroJabon = numeroJabon + 1;
        }
    }


    let promedioCompra;

    // /*if (acumuladorCantidadAlcohol > acumuladorCantidadJabon){
    //   if (acumuladorCantidadAlcohol > acumuladorCantidadBarbijo){
    //     promedioCompra = acumuladorPrecioAlcohol / numeroAlcohol;
    //   } else {
    //     promedioCompra = acumuladorPrecioBarbijo / numeroBarbijo;
    //   }
    // } else {
    //   if (acumuladorCantidadJabon > acumuladorCantidadBarbijo){
    //     promedioCompra = acumuladorPrecioJabon / numeroJabon;
    //   } else {
    //     promedioCompra = acumuladorPrecioBarbijo / numeroBarbijo;
    //   }
    // }*/

    if (acumuladorCantidadAlcohol >= acumuladorCantidadJabon && acumuladorCantidadAlcohol >= acumuladorCantidadBarbijo) {
        promedioCompra = acumuladorPrecioAlcohol / numeroAlcohol;
    } else if (acumuladorCantidadJabon >= acumuladorCantidadAlcohol && acumuladorCantidadJabon >= acumuladorCantidadBarbijo) {
        promedioCompra = acumuladorPrecioJabon / numeroJabon;
    } else {
        promedioCompra = acumuladorPrecioBarbijo / numeroBarbijo;
    }

    let mensaje = `
    La cantidad del alcohol más barato es: ${cantidadAlcoholBarato}
    El fabricante del alcohol más barato es: ${fabricanteAlcoholBarato}

    El promedio por compra del tipo con más unidades: ${promedioCompra}

    Cantidad de unidades de jabón: ${acumuladorCantidadJabon}
    `

    alert(mensaje);
}
