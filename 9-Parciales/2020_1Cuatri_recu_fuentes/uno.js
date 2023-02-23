/* Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total */

function mostrar() {
	let precioJabonCaro;
	let cantidadJabonCaro;
	let fabricanteJabonCaro;

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
	let cantidadProductos;

	cantidadProductos = 5;

	precioJabon = 100;

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
		while (isNaN(precio)) {
			precio = parseInt(prompt("Ingrese el precio de producto de forma correcta a continuacion:"))
		}
		let cantidad = parseInt(prompt("Ingrese la cantidad de producto:"));
		while (isNaN(cantidad)) {
			cantidad = parseInt(prompt("Ingrese la cantidad de producto de forma correcta a continuacion:"))
		}
		let marca = prompt("Ingrese la marca de producto:");

		let fabricante = prompt("Ingrese el fabricante de producto:");
		while (!isNaN(fabricante)) {
			precio = parseInt(prompt("Ingrese el nombre del fabricante correctamente:"))
		}

		if (tipo == "J") {
			acumuladorCantidadJabon = acumuladorCantidadJabon + cantidad;
			acumuladorPrecioJabon = acumuladorPrecioJabon + precio;
			numeroJabon = numeroJabon + 1;

			if (precio > precioJabon && precio < 300) {
				precioJabon = precio;
				cantidadJabonCaro = cantidad;
				fabricanteJabonCaro = fabricante;
			}
		} else if (tipo == "B") {
			acumuladorCantidadBarbijo = acumuladorCantidadBarbijo + cantidad;
			acumuladorPrecioBarbijo = acumuladorPrecioBarbijo + precio;
			numeroBarbijo = numeroBarbijo + 1;
		} else if (tipo == "A") {
			acumuladorCantidadAlcohol = acumuladorCantidadAlcohol + cantidad;
			acumuladorPrecioAlcohol = acumuladorPrecioAlcohol + precio;
			numeroAlcohol = numeroAlcohol + 1;
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
    La cantidad del Jabon más Caro es: ${cantidadJabonCaro}
    El fabricante del Jabon más Caro es: ${fabricanteJabonCaro}

    El promedio por compra del tipo con más unidades: ${promedioCompra}

    Cantidad de unidades de Barbijo: ${acumuladorCantidadBarbijo}
    `

	alert(mensaje);
}
