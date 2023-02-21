/* -Quimey Alejo Fontan
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {

	let nombreIngresado;

	nombreIngresado = prompt("Ingrese su nombre y Apellido: ");

	document.getElementById("txtIdNombre").value = nombreIngresado
}

