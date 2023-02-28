// Quimey Alejo Fontan 
// Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
// Tipo validad("arena";"cal";"cemento")
// Cantidad de bolsas,
// Precio por bolsa (más de cero ),
// al terminar la compra el cliente accede a un descuento segun las bolsas en total
// Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
// Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
// a) El importe total a pagar , bruto sin descuento y...
// b) el importe total a pagar con descuento(solo si corresponde)
// d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
// f) El tipo mas caro

function mostrar() {
  let respuesta;
  let banderaPrecio;
  let banderaCuentaPagar;

  let tipoBolsa;
  let precio;
  let cantidad;

  let cantBolsaArena;
  let cantBolsaCal;
  let cantBolsaCemento;

  let precionMaximo;
  let precioMinimo;

  let precioArena;
  let precioCemento;
  let precioCal;

  let primerDescuento;
  let segundoDescuento;

  let precioFinal;
  let precioConDescuento;

  banderaInicializacion = true;
  banderaPrecio;
  banderaCuentaPagar = true;

  precioMinimo = 0;
  precionMaximo = 1000;

  cantBolsaArena = 0;
  cantBolsaCal = 0;
  cantBolsaCemento = 0;

  primerDescuento = 0.15;
  segundoDescuento = 0.25;

  while (banderaInicializacion == true) {

    /* TIPO INGRESADO-----------------------------------------------------------------------*/
    tipoBolsa = prompt("Ingrese el tipo de productor a comprar con los siguientes valores 'A'-Arena, 'B'-Cal, 'C'-Cemento.")
    while (tipoBolsa !== 'A' && tipoBolsa !== 'B' && tipoBolsa !== 'C') {
      tipoBolsa = prompt("Por favor, ingrese un tipo de valor asignado 'A', 'B' o 'C'.");
    }

    alert("Genial, prosiga oprimiendo 'ACEPTAR' e ingresando el precio.");

    /* PRECIO INGRESADO-----------------------------------------------------------------------*/
    precio = parseFloat(prompt("Ingrese el precio asignado en gondola del producto que desea llevar."))
    while (isNaN(precio) || precio <= precioMinimo || precio > precionMaximo) {
      precio = parseFloat(prompt("Por favor, ingrese un tipo de valor numérico que sea mayor a 0 y menor o igual a 1000."));
    }

    alert("Genial, prosiga oprimiendo 'ACEPTAR' e ingresando la cantidad.");

    /* CANTIDAD INGRESADA---------------------------------------------------------------------*/
    cantidad = parseInt(prompt("Ingrese la cantidad asignada del producto que desea llevar."))
    while (isNaN(cantidad) || cantidad <= 0) {
      cantidad = parseInt(prompt("Por favor, ingrese un tipo de valor numerico que no sea 0 o negativo."))
    }

    alert("Genial, prosiga oprimiendo 'ACEPTAR' y a continuacion se le dara un informe de su compra.")

    /* PAGOS/DESCUENTOS--------------------------------------------------------------------*/
    precioFinal = cantidad * precio;

    switch (banderaCuentaPagar == true) {
      case (cantidad > 10 && cantidad < 30):
        precioConDescuento = precioFinal - (precioFinal * primerDescuento);
        console.log("El importe total a pagar (con descuento del 15%) es: $" + precioConDescuento.toFixed(2));
        break;
      case (cantidad > 30):
        precioConDescuento = precioFinal - (precioFinal * segundoDescuento);
        console.log("El importe total a pagar (con descuento del 25%) es: $" + precioConDescuento.toFixed(2));
        break;
      default:
        console.log("El importe total a pagar (bruto) es: $" + precioFinal.toFixed(2));
        break;
    }

    /* PRECIO MAS CARO--------------------------------------------------------------------*/

    switch (tipoBolsa) {
      case 'A':
        cantBolsaArena = cantBolsaArena + cantidad;
        if (banderaPrecio == true || precio > precioArena) {
          precioArena = precioArena + precio;
          banderaPrecio = false;
        }
        break;
      case 'B':
        cantBolsaCal = cantBolsaCal + cantidad;
        if (banderaPrecio == true || precio > precioCal) {
          precioCal = precioCal + precio;
          banderaPrecio = false;
        }
        break;
      case 'C':
        cantBolsaCemento = cantBolsaCemento + cantidad;
        if (banderaPrecio == true || precio > precioCemento) {
          precioCemento = precioCemento + precio;
          banderaPrecio = false;
        }
        break;
    }

    /* CANTIDAD ------------------------------------------------------------------------------------- */

    if (cantBolsaArena > cantBolsaCal && cantBolsaArena > cantBolsaCemento) {
      console.log("La cantidad de bolsas de Arena es mayor, son: " + cantBolsaArena.toFixed(2));
    }
    else if (cantBolsaCal > cantBolsaArena && cantBolsaCal > cantBolsaCemento) {
      console.log("La cantidad de bolsas de Cal es mayor, son: " + cantBolsaCal.toFixed(2));
    }
    else {
      console.log("La cantidad de bolsas de Cemento es mayor, son: " + cantBolsaCemento.toFixed(2));
    }

    /* TIPO MAS CARO COMPARACION---------------------------------------------------------------*/

    if (precioArena >= precioCal && precioArena >= precioCemento) {
      console.log("Las bolsas mas caras son las de arena, y valen: " + precioArena.toFixed(2));
    }
    else if (precioCal >= precioArena && precioCal >= precioCemento) {
      console.log("Las bolsas mas caras son las de Cal, y valen: " + precioArena.toFixed(2));
    }
    else if (precioCemento >= precioArena && precioCemento >= precioCal) {
      console.log("Las bolsas mas caras son las de Cemento, y valen: " + precioArena.toFixed(2));
    }

    // DESEA CONTINUAR -------------------------------------------------------------------------------
    respuesta = prompt("¿Desea ingresar más bolsas? (si/no)").toLowerCase();

    while (respuesta !== "si" && respuesta !== "no") {
      respuesta = prompt("La respuesta ingresada no es válida. ¿Desea ingresar más bolsas? (si/no)");
    }
    if (respuesta == "si") {
      banderaInicializacion = true;
    } else if (respuesta == "no") {
      break;
    }
  }
}

// --------------------------------------------------------------------------------------------------------------------

