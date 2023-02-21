/* -Quimey Alejo Fontan*/
function mostrar() {
	let estacionAno
	let destinoViaje;

	let precioDia;
	let precioViaje;
	let precioFinal;
	let porcentajePrecio;
	let porcentajeEstacion;
	let estadia;
	let mensaje;

	precioDia = 15000;
	estadia = parseInt(prompt("Tiempo de su estadia: ?"));
	precioViaje = (estadia * precioDia);
	porcentajeEstacion = 0
	porcentajePrecio = 0
	precioTotal = 0
	estacionAno = document.getElementById("txtIdEstacion").value;
	destinoViaje = document.getElementById("txtIdDestino").value;

	switch (destinoViaje) {
		case "Bariloche":
			switch (estacionAno) {
				case "Invierno":
					porcentajeEstacion = 20;
					break;
				case "Verano":
					porcentajeEstacion = -20;
					break;
				case "Otoño":
					porcentajeEstacion = 10;
					break;
				default:
					porcentajeEstacion = 10;
			}break;
		case "Cataratas":
			switch (estacionAno) {
				case "Invierno":
					porcentajeEstacion = -10;
					break;
				case "Verano":
					porcentajeEstacion = 10;
					break;
				case "Otoño":
					porcentajeEstacion = 10;
					break;
				default:
					porcentajeEstacion = 10;
			}break;
		case "Mar del plata":
			switch (estacionAno) {
				case "Invierno":
					porcentajeEstacion = -20;
					break;
				case "Verano":
					porcentajeEstacion = 20;
					break;
				case "Otoño":
					porcentajeEstacion = 10;
					break;
				default:
					porcentajeEstacion = 10;
			}break;
		default:
			switch (estacionAno) {
				case "Invierno":
					porcentajeEstacion = -10;
					break;
				case "Verano":
					porcentajeEstacion = 10;
					break;
				case "Otoño":
					porcentajeEstacion = porcentajeEstacion;
					break;
				default:
					porcentajeEstacion = porcentajeEstacion;
			}
	}

	porcentajePrecio = (precioViaje * porcentajeEstacion) / 100;
	precioFinal = precioViaje + porcentajePrecio;
	mensaje = "Su viaje con destino a " + destinoViaje + " en " + estacionAno + " tiene un costo de $" + precioFinal;

	alert(mensaje);

}//FIN DE LA FUNCIÓN