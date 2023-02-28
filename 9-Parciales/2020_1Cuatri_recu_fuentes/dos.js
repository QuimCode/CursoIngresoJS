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
  let banderaInicio;
  let banderaInicioCantidad;

  let tipoPro;
  let cantidadPro;
  let precioBolsa;

  let cantidadBolsa

  banderaInicio == true;
  banderaInicioCantidad == true;

  cantidadBolsa = 0;

  while (banderaInicio == true) {

    tipoPro = prompt("Ingrese el tipo de producto a comprar 'arena'. 'cal' y 'cemento'.")
    if (!isNaN(tipoPro) && tipoPro != 'arena' && tipoPro != 'cal' && tipoPro != 'cemento') {
      tipoPro = prompt("Incorrecto, ingrese el tipo de producto a comprar 'arena'. 'cal' y 'cemento'.")
    }

    cantidadPro = parseInt(prompt("Ingrese el tipo de producto a comprar 'arena'. 'cal' y 'cemento'."))
    if (isNaN(cantidadPro)) {
      cantidadPro = parseInt(prompt("Incorrecto, ingrese el precio del producto en gondola."))
    }

    precioBolsa = parseInt(prompt("Ingrese el tipo de producto a comprar 'arena'. 'cal' y 'cemento'."))
    if (isNaN(precioBolsa) && precioBolsa > 0) {
      precioBolsa = parseInt(prompt("Incorrecto, ingrese el precio del producto en gondola mayor a '0'."))
    }

    switch (cantidadBolsa) {
      case tipoPro:
        if (banderaInicioCantidad == true || tipoPro == 'arena') {
          cantidadBolsa = cantidadBolsa + cantidadPro;
          banderaInicioCantidad == false;
        }
        break;
      case tipoPro:
        if (banderaInicioCantidad == true || tipoPro == 'cal') {
          cantidadBolsa = cantidadBolsa + cantidadPro;
          banderaInicioCantidad == false;
        }
        break;
      case tipoPro:
        if (banderaInicioCantidad == true || tipoPro == 'cemento') {
          cantidadBolsa = cantidadBolsa + cantidadPro;
          banderaInicioCantidad == false;
        }
        break;
    }
  }//FIN WHILE
}//FIN FUNCTION
