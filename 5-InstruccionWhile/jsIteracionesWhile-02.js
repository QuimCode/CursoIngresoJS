/* -Quimey Alejo Fontan 2
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar() {
	let i;
	let mensaje;


	i = 10;

	while (i > 0) {
		mensaje = "El numero es ..." + i;
		i = i - 1;
		alert(mensaje);
	}
}
//FIN DE LA FUNCIÓN


	// while 2 bis: Ingresar 5 números, y determinar la cantidad de números que son mayores que 10 
	// y menores 20 (inclusive en ambos casos)

	// let numeroIngresado;
	// let mensaje;
	// let mayor10;
	// let vueltas;

	// mayor10=0;
	// vueltas=0;

	// while(vueltas<5)
	// {
	// 	numeroIngresado=prompt("Ingrese un número:");
	// 	while(isNaN(numeroIngresado)){
	// 		numeroIngresado = parseInt(prompt("Error, ingrese un número válido"));
	// 	}
	// 	if(numeroIngresado>=10 && numeroIngresado<=20){
	// 		mayor10++;
	// 	}
	// 	vueltas++;
	// }


//--------------------------------------------


// while 2 bis-bis:
	//Ingresar numeros hasta que el usuario quiera. Determinar la cantidad de números que son
	//mayores que 10 y menores 20 (inclusive en ambos casos).También el promedio de los
	// números que cumplen la condición anterior.

// 	let numeroIngresado;
// 	let mensaje;
// 	let mayor10;
// 	let acumulador;
// 	let vueltas;
// 	let respuesta;
// 	let promedio;

// 	mayor10=0;
// 	vueltas=0;
// 	acumulador=0;
// 	respuesta="si";

// 	while(respuesta=="si")
// 	{
// 		numeroIngresado=parseInt(prompt("Ingrese un número:"));
// 		while(isNaN(numeroIngresado)){
// 			numeroIngresado = parseInt(prompt("Error, ingrese un número válido"));
// 		}
// 		if(numeroIngresado>=10 && numeroIngresado<=20){
// 			acumulador=acumulador+numeroIngresado;
// 			mayor10++;
// 		}
// 		respuesta=prompt("Desea continuar?");
// 	}

// 	promedio=  (acumulador/mayor10).toFixed(2
// 		);
// 	mensaje="Se ingresaron "+mayor10+" números entre 10 y 20.Y su promedio es: "+promedio;

// 	alert(mensaje);
// }