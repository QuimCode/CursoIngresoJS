/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
	//definicion de variables
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let nacionalidadIngresada;
	let sueldoIngresado;
	let legajoIngresado;

	let i;
	let respuesta;

	let mensaje;
	//--------------------------------------------------------------------------------------------

	respuesta = "si";
	//--------------------------------------------------------------------------------------------

	for (i = 0; i < 1; i + 1) {
		mensaje = "Esta a punto de comenzar un Censo de BTL";
		alert(mensaje)
		respuesta = prompt("¿ Desea continuar ? (si/no)")

		while (respuesta == "si") {

			edadIngresada = parseInt(prompt("Ingrese su edad numericamente; desde 18 a 90 años."));

			while (isNaN(edadIngresada)) {

				edadIngresada = parseInt(prompt("INCORRECTO, ingrese su edad con valores numericos."));

				if (edadIngresada >= 18 && edadIngresada <= 90) {
					document.getElementById("txtIdEdad").value = "Su edad es " + edadIngresada;
				}
				else {
					edadIngresada = parseInt(prompt("INCORRECTO, ingrese un valor numerico valido entre 18-90 años."));
				}
			}
			//--------------------------------------------------------------------------------------------

			sexoIngresado = prompt("Ingrese su sexo alfabeticamente: (m/f).");

			while (!isNaN(sexoIngresado)) {
				sexoIngresado = prompt("INCORRECTO, ingrese un valor alfabetico para el sexo.");

				if (sexoIngresado != "m" && sexoIngresado != "f") {
					sexoIngresado = prompt("INCORRECTO, ingrese un valor alfabetico asignado para el sexo (f/m).");
				}
			}

			if (sexoIngresado == "m") {
				sexoIngresado = "Masculino"
				document.getElementById("txtIdSexo").value = "Su sexo es " + sexoIngresado
			}
			else if (sexoIngresado == "f") {
				sexoIngresado = "Femenino"
				document.getElementById("txtIdSexo").value = "Su sexo es " + sexoIngresado
			}
			//--------------------------------------------------------------------------------------------

			estadoCivilIngresado = parseInt(prompt("Ingrese su estado civil: '1'-Para soltero, '2'-Para casados, '3'-Para divorciado y '4'-Para viudo"));

			while (isNaN(estadoCivilIngresado)) {
				estadoCivilIngresado = parseInt(prompt("INCORRECTO, ingrese un un valor numerico asignado (1-2-3-4)"));
			}

			if (estadoCivilIngresado == "1") {
				estadoCivilIngresado = "Soltero"
				document.getElementById("txtIdEstadoCivil").value = "Su estado es " + estadoCivilIngresado
			}
			else {

				if (estadoCivilIngresado == "2") {
					estadoCivilIngresado = "Casado"
					document.getElementById("txtIdEstadoCivil").value = "Su estado es " + estadoCivilIngresado;
				}

				if (estadoCivilIngresado == "3") {
					estadoCivilIngresado = "Divorciado"
					document.getElementById("txtIdEstadoCivil").value = "Su estado es " + estadoCivilIngresado;
				}

				else if (estadoCivilIngresado == "4") {
					estadoCivilIngresado = "Viudo"
					document.getElementById("txtIdEstadoCivil").value = "Su estado es " + estadoCivilIngresado;
				}
			}
			//--------------------------------------------------------------------------------------------

			sueldoIngresado = parseInt(prompt("Ingrese su sueldo a traves de valores numericos y sin puntos, debe ser superior ah 80000 o no podra seguir con el censo."))

			while (isNaN(sueldoIngresado)) {
				sueldoIngresado = parseInt(prompt("IINCORRECTO, ingrese su sueldo a traves de valores numericos"));
			}

			if (sueldoIngresado >= "80000") {
				mensaje = "Genial su sueldo a sido registrado, continue apretando en 'ACEPTAR'";
				alert(mensaje);
				document.getElementById("txtIdSueldo").value = "Su sueldo es de " + sueldoIngresado + " pesos.";
			}
			else {
				sueldoIngresado < "80000";
				mensaje = "Lamentamos informarle que la suma establecida no supero el requisito de los '80000', la encuesta se ah terminado :C ."
				alert(mensaje);
				break;
			}
			//--------------------------------------------------------------------------------------------
			legajoIngresado = parseInt(prompt("Ingrese el numero de legajo de 4 digitos, SIN CEROS A LA IZQUIERDA."));

			while (isNaN(legajoIngresado)) {
				parseInt(prompt("INCORRECTO, Ingrese el legajo solo con valores numericos y SIN ceros a la izquierda, por favor ingreselo de nuevo."));
			}

			document.getElementById("txtIdLegajo").value = "Su legajo es " + legajoIngresado;

			//--------------------------------------------------------------------------------------------

			nacionalidadIngresada = prompt("Ingrese su nacionalidad: “A”-para argentinos, “E”-para extranjeros, “N”-para nacionalizados.");

			while (!isNaN(nacionalidadIngresada)) {
				estadoCivilIngresado = prompt("INCORRECTO, ingrese un valor alfabetico asignado para el estado nacional ('A'/'E'/'N').");
			}

			if (nacionalidadIngresada == "A") {
				nacionalidadIngresada = "Argentina/o"
				document.getElementById("txtIdNacionalidad").value = "Su nacionalidad es " + nacionalidadIngresada;
			}
			else {

				if (nacionalidadIngresada == "E") {
					nacionalidadIngresada = "Extranjera/o"
					document.getElementById("txtIdNacionalidad").value = "Su nacionalidad es " + nacionalidadIngresada;
				}

				else if (nacionalidadIngresada == "N") {
					nacionalidadIngresada = "Nacionalizada/o"
					document.getElementById("txtIdNacionalidad").value = "Su nacionalidad es " + nacionalidadIngresada;
				}
			}

			respuesta = prompt("Genial, ahterminado el censo, gracias por su tiempo. ¿ Desea hacer otro censo de BTL ? (si/no)")
			if (respuesta == "no") {
				break;
			}
		}
	}
}
