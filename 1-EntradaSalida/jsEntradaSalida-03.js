/*Quimey Alejo Fontan
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

function mostrar() {

	let nombreIngresado;
	let mensaje;

	nombreIngresado = document.getElementById("txtIdNombre").value;

	mensaje = "Tu nombre es: " + nombreIngresado;

	alert(mensaje);
}


/*Quimey Alejo Fontan
Ejercicio 3.bis: Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto 
junto al precio aumentado en un 30%. 
Pueden utilizar el html del ejercicio 3 para resolverlo.

En el HTML los cambios asignados fueron ...
	<div class="col-6 col-s-9">

	<form class=" animated bounceInLeft FormIngreso">
	<h1>Ingrese Precio de Producto</h1>
	<input type="text"  placeholder="Precio de su Prodcuto" id="txtIdNombre"> 


	let productoIngresado;
	let precioProducto;
	let valorAumento = 1.30;
	let productoAumentado;
	let mensaje;

	productoIngresado = prompt("Ingrese la descripcion del producto debajo:");
	precioProducto = document.getElementById("txtIdNombre").value;
	precioProducto = parseInt(precioProducto);

	productoAumentado = (precioProducto * valorAumento);

	mensaje = "El producto ... " + productoIngresado + " tiene un valor aumentado del 30% igual a = " + productoAumentado;

	alert(mensaje); */


