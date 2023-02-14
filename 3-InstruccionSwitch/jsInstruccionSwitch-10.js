/*Quimey Alejo Fontan*/
function mostrar() {
	let destinoViaje;
	let estacionAno;
	let estadoDeViaje;

	destinoViaje = document.getElementById("txtIdDestino").value;
	estacionAno = document.getElementById("txtIdEstacion").value;

	if (destinoViaje == "Bariloche") {
		switch (estacionAno) {
			case "Invierno":
				estadoDeViaje = "Se Viaja.";
				break;
			case "Otoño":
				estadoDeViaje = "Se viaja.";
				break;
			default:
				estadoDeViaje = "No se viaja.";
		}
	}
	else if (destinoViaje == "Mar del plata" || destinoViaje == "Cataratas") {
		switch (estacionAno) {
			case "Verano":
				estadoDeViaje = "Se viaja.";
				break;
			case "Otoño":
				estadoDeViaje = "Se viaja.";
				break;
			case "Primavera":
				estadoDeViaje = "Se viaja.";
				break;
			default:
				estadoDeViaje = "No se viaja.";
		}
	}
	else if (destinoViaje == "Cordoba") {
		switch (estacionAno) {
			case "Otoño":
				estadoDeViaje = "Se viaja.";
				break;
			case "Primavera":
				estadoDeViaje = "Se viaja.";
				break;
			default:
				estadoDeViaje = "No se viaja.";
		}
	}
	alert(estadoDeViaje);
}//FIN DE LA FUNCIÓN