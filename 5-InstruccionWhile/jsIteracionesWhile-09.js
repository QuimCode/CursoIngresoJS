/* -Quimey Alejo Fontan
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables
	let numeroIngresado
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	respuesta = "si";
	numeroMaximo = 0;
	numeroMinimo = 0;

	//iniciar variables

	while (respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese su numero."));

		if (numeroMaximo < numeroIngresado) {
			numeroMaximo = numeroIngresado;
		}
		else if (numeroMinimo > numeroIngresado) {
			numeroMinimo = numeroIngresado;
		}

		respuesta = prompt("Desea continuar ? Si/No");

	}

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;

}//FIN DE LA FUNCIÓN

// While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
// mostrar el número máximo y el número mínimo ingresado.
// El menor de los pares y el mayor de los negativos ...(solo si hay)

// let numeroIngresado;
// let numeroMaximo;
// let numeroMinimo;
// let respuesta;
// let flag;
// let iniciadorNeg;
// let par;
// let menorPar;
// let numeroNegativo;
// let restoPositivo;
// let restoNegativo;
// let parFlag;

// //iniciar variables
// respuesta='si';
// flag=true
// iniciadorNeg=true
// parFlag=true

// while(respuesta=="si")
// {
// 	numeroIngresado=parseInt(prompt("Ingrese un número:"));
// 	while(isNaN(numeroIngresado)){
// 		numeroIngresado = parseInt(prompt("Error, ingrese un número válido"));
// 	}
// 	if(flag==true){
// 		numeroMaximo=numeroIngresado;
// 		numeroMinimo=numeroIngresado;

// 		restoPositivo=numeroIngresado%2;
// 		restoNegativo=numeroIngresado%-2;

// 		if(numeroIngresado<0){
// 			numeroNegativo=numeroIngresado;
// 			iniciadorNeg=false;
// 		}

// 		if(restoPositivo==0 || restoNegativo==0){
// 			par=numeroIngresado;
// 			menorPar=numeroIngresado;
// 			parFlag=false;
// 		}
// 		flag=false;
// 	}else
// 		if (numeroIngresado>numeroMaximo){
// 			numeroMaximo=numeroIngresado;
// 		}else if(numeroIngresado<numeroMinimo)
// 		{
// 		numeroMinimo=numeroIngresado;
// 		}

// 	restoPositivo=numeroIngresado%2;
// 	restoNegativo=numeroIngresado%-2;

// 	if((restoPositivo==0 || restoNegativo==0)&& parFlag==true){
// 		par=numeroIngresado;
// 		menorPar=numeroIngresado;
// 		parFlag=false;
// 	}

// 	if(restoPositivo==0 || restoNegativo==0 ){
// 		par=numeroIngresado;
// 		if(par<menorPar){
// 			menorPar=par;
// 		}
// 	}

// 	if(numeroIngresado<0 && iniciadorNeg==true){
// 		numeroNegativo=numeroIngresado;
// 		iniciadorNeg=false;
// 	}
// 	if(numeroIngresado<0 && numeroNegativo<numeroIngresado){
// 		numeroNegativo=numeroIngresado;
// 	}
// 	respuesta=prompt("desea continuar?");
// }

// txtIdMaximo.value=numeroMaximo;
// txtIdMinimo.value=numeroMinimo;
// if(numeroNegativo !== undefined && menorPar !== undefined){
// 	alert("-El menor de los números pares es: "+menorPar+"\n"+"-El mayor de los negativos es:"
// 	+numeroNegativo);
// }
// else if(numeroNegativo==undefined && menorPar !== undefined){
// 		alert("-El menor de los números pares es: "+menorPar);
// 	  }
// else if(numeroNegativo !== undefined && menorPar==undefined){
// 		alert("-El mayor de los números negativos es: "+numeroNegativo);
// 	}