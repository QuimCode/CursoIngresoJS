/* -Quimey Alejo Fontan */
function mostrar() {
	let condicion;
	let mensaje;

	let i;

	for (i = 0; i < Infinity; i++) {
		condicion = parseInt(prompt("Ingrese el valor numerico que deseé. Si quiere terminar la operacion siemplemente ingrese '9'."));

		while (isNaN(condicion)) {
			condicion = parseInt(prompt("Ingrese un valor numerico"));
		}
		if (condicion == "9") {
			mensaje = "Usted ah terminado las operaciones con 9";
			alert(mensaje);
			break;
		}
		else {
			mensaje = "Siga ingresando numeros por favor o termine la operacion con '9'."
			alert(mensaje);
		}
	}
}//FIN DE LA FUNCIÓN