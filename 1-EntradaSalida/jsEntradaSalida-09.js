/*Quimey Alejo Fontan
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
	let sueldoBase;
	let sueldoAumento;
	let sueldoCuenta = 100;
	let sueldoResultado;

	sueldoBase = document.getElementById("txtIdSueldo").value;
	sueldoBase = parseInt(sueldoBase);

	sueldoAumento = (sueldoBase / sueldoCuenta) * 10;
	sueldoResultado = sueldoBase + sueldoAumento;

	document.getElementById("txtIdResultado").value = sueldoResultado;
}
