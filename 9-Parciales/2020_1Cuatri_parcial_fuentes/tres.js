//  Quimey Alejo Fontan

// Enunciado:
// Bienvenidos.
// En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
// a) El nombre de la persona con mas temperatura.
// b) Cuantos mayores de edad estan viudos
// c) La cantidad de hombres que hay solteros o viudos.
// d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
// e) El promedio de edad entre los hombres solteros.
function mostrar() {
	let nombrePersona;
	let estadoCivil;
	let edadPersona;
	let sexoPersona;
	let temperaturaCorporal;
	let ingresoDeDatos;
	let contadorSolteros;
	let AcumuEdadHombres;
	let ContadorHombresViudosSolteros;
	let mayoresDe60;
	let contMayoresViudos;
	let temperaturaMasAlta;
	let personaTemperaturaMasAlta;
	let hombresPromedio;

	contadorSolteros = 0
	AcumuEdadHombres = 0
	ContadorHombresViudosSolteros = 0
	mayoresDe60 = 0
	contMayoresViudos = 0
	ingresoDeDatos = "si"

	//---------------------------------------------------------------------------------------

	while (ingresoDeDatos == "si") {
		nombrePersona = prompt("Ingrese su nombre")
		edadPersona = parseInt(prompt("Ingrese su edad"));
		while (edadPersona < 1 || edadPersona > 100) {
			edadPersona = parseInt(prompt("Ingrese su edad dentro de los valores esperados (0-100"));
		}

		temperaturaCorporal = parseInt(prompt("Ingrese su temperaturaCorporal"));
		while (isNan(temperaturaCorporal) || temperaturaCorporal < 35 || temperaturaCorporal > 45) {
			temperaturaCorporal = parseInt(prompt("Ingrese su temperaturaCorporal"));
		}

		sexoPersona = prompt("Ingrese su sexo");
		while (sexoPersona != "f" && sexoPersona != "m") {
			sexoPersona = prompt("Ingrese su sexo");
		}


		estadoCivil = prompt("Ingrese su estadoCivil");
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Ingrese su estadoCivil");
		}

		if (temperaturaCorporal > temperaturaMasAlta) {
			temperaturaMasAlta = temperaturaCorporal
			personaTemperaturaMasAlta = nombrePersona
		}

		if (Persona > 17 && estadoCivil == "viudo") {
			contMayoresViudos = contMayoresViudos + 1
		}

		if (sexoPersona == "m") {
			switch (estadoCivil) {
				case 'soltero':
					contadorSolteros = contadorSolteros + 1;
					AcumuEdadHombres = AcumuEdadHombres + edadPersona;
					break;
				case 'viudo':
					ContadorHombresViudosSolteros = ContadorHombresViudosSolteros + 1;
					break;
			}
		}

		if (edadPersona > 59 && temperaturaCorporal > 38) {
			mayoresDe60 = mayoresDe60 + 1
		}

		ingresoDeDatos = prompt("Quiere seguir ingresando datos?: ")
	}

	hombresPromedio = AcumuEdadHombres / contadorSolteros

	alert("La persona con mayor temperatura es " + personaTemperaturaMasAlta)
	alert("hay " + contMayoresViudos + " de mayores de edad que son viudos")
	alert("hay " + ContadorHombresViudosSolteros + " personas que son hombres solteros y viudos")
	alert("hay " + mayoresDe60 + " mayores de 60 años con mas de 38 de temperatura")
	alert("El promedio de edad entre hombres solteros es de " + hombresPromedio)
}

//---------------------------------------------------------------------------------

/*3. De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)
El programa debera mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.*/

// function mostrar {
  // let i;

  // let nombre;
  // let apellido;
  // let genero;
  // let cantHijos;

  // let procentajeEmpleados;
  // let noBinMaxHijos;
  // let apellidoBinMax
  // let empleMinHijos;
  // let apellidoMinHijos;

  // let contadorHijo;
  // let acumuladorHijo;
  // let contadorEmpleador;

  // contadorHijo = 0;
  // acumuladorHijo = 0;
  // contadorEmpleador = 0;

  // for (i = 0; i < 10; i++) {
  //   contadorEmpleador++

  //   nombre = prompt("Ingrese su nombre.")
  //   while (!isNaN(nombre)) {
  //     nombre = prompt("Incorrecto, ingrese su nombre.")
  //   }
  //   apellido = prompt("Ingrese su apellido.")
  //   while (!isNaN(apellido)) {
  //     apellido = prompt("Incorrecto, ingrese su apellido.")
  //   }
  //   genero = prompt("Ingrese su genero, 'femenino', 'masculino' o 'no binario'.")
  //   while (!isNaN(genero)) {
  //     genero = prompt("Ingrese los valores establecidos, 'femenino', 'masculino' o 'no binario'.")
  //   }
  //   cantHijos = parseInt(prompt("Ingrese la cantidad de hijos."))
  //   while (isNaN(cantHijos) && cantHijos > 0) {
  //     cantHijos = parseInt(prompt("Incorrecto, ingrese la cantidad de hijos con valores numericos."))
  //   }

  //   // a. Porcentaje de empleados por cada genero.

  //   // b. El nombre del empleado No Binario con mas cantidad de hijos.
  //   if (genero = 'no binario') {
  //     noBinMaxHijos = nombre;
  //     apellidoBinMax = apellido;
  //     contadorHijo = contadorHijo + cantHijos;
  //   }

  //   // c. Nombre y apellido del primer empleado que no tiene hijos.*/
  //   if (cantHijos == 0) {
  //     empleMinHijos = nombre;
  //     apellidoMinHijos = apellido;
  //   }
  //   document.write("El porcentaje de empleados es ")
  //   document.write("El empleado sin ninguna hijo es " + empleMinHijos + apellidoMinHijos)
  //   document.write("El empleado no binario con mayor cantidad de hijos es" + noBinMaxHijos + apellidoBinMax)

  // }
