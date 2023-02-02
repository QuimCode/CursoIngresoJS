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


/*Quimey Alejo Fontan
Ejercicio 8.bis: Ingresar dos numeros por id
Se pide:
mostrar por alert:
a) La suma de los dos numeros
b) El promedio de los numeros
c) El resto de los numeros (el primero en modulo del segundo)

function SacarResto() {

	let productoUno;
	let productoDos;
	let parseUno;
	let parseDos;
	let cuenta;
	let promedio;
	let resto;

	productoUno = document.getElementById("txtIdNumeroDividendo").value;
	productoDos = document.getElementById("txtIdNumeroDivisor").value;

	parseUno = parseInt(productoUno);
	parseDos = parseInt(productoDos);

	cuenta = parseUno + parseDos;
	mensaje = "La suma de ambos productos es ... " + cuenta;

	alert(mensaje);

	promedio = cuenta / 2;
	mensaje = "El promedio de los productos es ... " + promedio;

	alert(mensaje);

	resto = parseUno % parseDos;

	mensaje = "El resto de los productos es ... " + resto;
}*/