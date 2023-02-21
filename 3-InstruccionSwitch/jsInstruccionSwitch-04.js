/* -Quimey Alejo Fontan*/
function mostrar() {
	//tomo el mes
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Enero":
			mensaje = "Este mes tiene 31 días";
			break;
		case "Marzo":
			mensaje = "Este mes tiene 31 días";
			break;
		case "Abril":
			mensaje = "Este mes tiene 30 días";
			break;
		case "Mayo":
			mensaje = "Este mes tiene 31 días";
			break;
		case "Julio":
			mensaje = "Este mes tiene 31 días";
			break;
		case "Junio":
			mensaje = "Este mes tiene 30 días";
			break;
		case "Agosto":
			mensaje = "Este mes tiene 31 días";
			break;
		case "Septiembre":
			mensaje = "Este mes tiene 30 días";
			break;
		case "Octubre":
			mensaje = "Este mes tiene 31 días";
			break;
		case "Noviembre":
			mensaje = "Este mes tiene 30 días";
			break;
		case "Diciembre":
			mensaje = "Este mes tiene 31 días";
			break;
		case "Febrero":
			mensaje = "Este mes tiene 29 días";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN