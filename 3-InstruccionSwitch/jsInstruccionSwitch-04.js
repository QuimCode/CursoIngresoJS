/*Quimey Alejo Fontan*/
function mostrar() {
	//tomo el mes
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Enero":
			alert("Este mes tiene 31 días");
			break;
		case "Marzo":
			alert("Este mes tiene 31 días");
			break;
		case "Abril":
			alert("Este mes tiene 30 días");
			break;
		case "Mayo":
			alert("Este mes tiene 31 días");
			break;
		case "Julio":
			alert("Este mes tiene 31 días");
			break;
		case "Junio":
			alert("Este mes tiene 30 días");
			break;
		case "Agosto":
			alert("Este mes tiene 31 días");
			break;
		case "Septiembre":
			alert("Este mes tiene 30 días");
			break;
		case "Octubre":
			alert("Este mes tiene 31 días");
			break;
		case "Noviembre":
			alert("Este mes tiene 30 días");
			break;
		case "Diciembre":
			alert("Este mes tiene 31 días");
			break;
		case "Febrero":
			alert("Este mes tiene 29 días");
			break;
	}

}//FIN DE LA FUNCIÓN