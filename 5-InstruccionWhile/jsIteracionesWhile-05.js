/* -Quimey Alejo Fontan
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let sexoIngresado;
	let mensaje;

	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m") {
		sexoIngresado = prompt("ingrese f ó m en miniscula.");
	}

	if (sexoIngresado == "f") {
		mensaje = "Usted es Femenino";
	}
	else if (sexoIngresado == "m") {
		mensaje = "Usted es Masculino";
	}

	document.getElementById("txtIdSexo").value = mensaje;
}//FIN DE LA FUNCIÓN