/* -Quimey Alejo Fontan*/
function mostrar() {
	//tomo el mes
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Julio":
		case "Junio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Este mes tiene 30 o más días";
			break;
		case "Febrero":
			mensaje = "Este mes tiene 29 días";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN