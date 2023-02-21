/* -Quimey Alejo Fontan */
function mostrar() {
	let i;
	let repetciones;
	let mensaje;

	repetciones = parseInt(prompt("Ingrese el número de repeticiones que quiere ver el mensaje asignado."));
	mensaje = "HOLA UTN FRA!"

	for (i = 0; i < repetciones; i++) {
		document.write(mensaje);
	}
}//FIN DE LA FUNCIÓN