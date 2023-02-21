/* -Quimey Alejo Fontan*/
function mostrar() {
	let destinoViaje;
	let mensaje;

	destinoViaje = document.getElementById("txtIdDestino").value;

	switch (destinoViaje) {
		case "Bariloche":
			mensaje = "Oeste";
			break;
		case "Cataratas":
			mensaje = "Norte";
			break;
		case "Ushuaia":
			mensaje = "Sur";
			break;
		case "Mar del plata":
			mensaje = "Este";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN