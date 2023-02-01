/*Quimey Alejo Fontan
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
	let Dividiendo;
	let Divisor;
	let Parse1;
	let Parse2;
	let Resultado;
	let Mensaje;

	Dividiendo = document.getElementById("txtIdNumeroDividendo").value;
	Divisor = document.getElementById("txtIdNumeroDivisor").value;

	Parse1 = parseInt(Dividiendo);
	Parse2 = parseInt(Divisor);

	Resultado = Dividiendo % Divisor;

	Mensaje = "Tu resultado es ... " + Resultado;

	alert(Mensaje);
}
