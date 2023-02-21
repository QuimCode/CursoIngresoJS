/* -Quimey Alejo Fontan
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	let Num1;
	let Num2;
	let resultado;
	let mensaje;

	Num1 = document.getElementById("txtIdNumeroUno").value;
	Num2 = document.getElementById("txtIdNumeroDos").value;
	Num1 = parseInt(Num1);
	Num2 = parseInt(Num2);

	resultado = Num1 + Num2;
	mensaje = "La suma es " + resultado;

	alert(mensaje);
}

