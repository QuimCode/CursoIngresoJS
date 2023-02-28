/* Quimey Alejo Fontan

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcoholes, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en */

function mostrar() {

    let precioAlcoholBarato;
    let cantidadAlcoholBarato;
    let fabricanteAlcoholBarato;

    let acumuladorCantidadAlcohol;
    let acumuladorCantidadJabon;
    let acumuladorCantidadBarbijo;

    let acumuladorPrecioAlcohol;
    let acumuladorPrecioJabon;
    let acumuladorPrecioBarbijo;

    let numeroAlcohol;
    let numeroJabon;
    let numeroBarbijo;

    let i;
    let cantidadProductos;

    cantidadProductos = 5;

    precioAlcoholBarato = 300;

    acumuladorCantidadAlcohol = 0;
    acumuladorCantidadJabon = 0;
    acumuladorCantidadBarbijo = 0;

    acumuladorPrecioAlcohol = 0;
    acumuladorPrecioJabon = 0;
    acumuladorPrecioBarbijo = 0;

    numeroAlcohol = 0;
    numeroJabon = 0;
    numeroBarbijo = 0;


    for (i = 0; i < cantidadProductos; i++) {
        let tipo = prompt("Ingrese el tipo de producto (A/B/J):");

        while (tipo != "A" && tipo != "B" && tipo != "J") {
            tipo = prompt("Código de producto incorrecto. Ingreselo correctamente (A/B/J):")
        }

        let precio = parseInt(prompt("Ingrese el precio de producto:"));
        while (isNaN(precio));
        let cantidad = parseInt(prompt("Ingrese la cantidad de producto:"));

        let marca = prompt("Ingrese la marca de producto:");
        let fabricante = prompt("Ingrese el fabricante de producto:");

        if (tipo == "A") {
            acumuladorCantidadAlcohol = acumuladorCantidadAlcohol + cantidad;
            acumuladorPrecioAlcohol = acumuladorPrecioAlcohol + precio;
            numeroAlcohol = numeroAlcohol + 1;

            if (precio < precioAlcoholBarato) {
                precioAlcoholBarato = precio;
                cantidadAlcoholBarato = cantidad;
                fabricanteAlcoholBarato = fabricante;
            }
        } else if (tipo == "B") {
            acumuladorCantidadBarbijo = acumuladorCantidadBarbijo + cantidad;
            acumuladorPrecioBarbijo = acumuladorPrecioBarbijo + precio;
            numeroBarbijo = numeroBarbijo + 1;
        } else if (tipo == "J") {
            acumuladorCantidadJabon = acumuladorCantidadJabon + cantidad;
            acumuladorPrecioJabon = acumuladorPrecioJabon + precio;
            numeroJabon = numeroJabon + 1;
        }
    }


    let promedioCompra;

    //     // /*if (acumuladorCantidadAlcohol > acumuladorCantidadJabon){
    //     //   if (acumuladorCantidadAlcohol > acumuladorCantidadBarbijo){
    //     //     promedioCompra = acumuladorPrecioAlcohol / numeroAlcohol;
    //     //   } else {
    //     //     promedioCompra = acumuladorPrecioBarbijo / numeroBarbijo;
    //     //   }
    //     // } else {
    //     //   if (acumuladorCantidadJabon > acumuladorCantidadBarbijo){
    //     //     promedioCompra = acumuladorPrecioJabon / numeroJabon;
    //     //   } else {
    //     //     promedioCompra = acumuladorPrecioBarbijo / numeroBarbijo;
    //     //   }
    //     // }*/

    if (acumuladorCantidadAlcohol >= acumuladorCantidadJabon && acumuladorCantidadAlcohol >= acumuladorCantidadBarbijo) {
        promedioCompra = acumuladorPrecioAlcohol / numeroAlcohol;
    } else if (acumuladorCantidadJabon >= acumuladorCantidadAlcohol && acumuladorCantidadJabon >= acumuladorCantidadBarbijo) {
        promedioCompra = acumuladorPrecioJabon / numeroJabon;
    } else {
        promedioCompra = acumuladorPrecioBarbijo / numeroBarbijo;
    }

    let mensaje = `
    La cantidad del alcohol más barato es: ${cantidadAlcoholBarato}
    El fabricante del alcohol más barato es: ${fabricanteAlcoholBarato}

    El promedio por compra del tipo con más unidades: ${promedioCompra}

    Cantidad de unidades de jabón: ${acumuladorCantidadJabon}
    `

    alert(mensaje);
}


// ---------------------------------------------------- PREPARCIAL CRIS/DOMINGO


// /*Realizar el algoritmo que permita ingresar 5 paises:
// del continente (validar entre america , asia , europa y africa)
// el nombre del país,
// cantidad de habitantes en millones entre 1 y 2000 (validar)
// la temperaruta promedio que se registra en su territorio(entre -50 y 50)
// Se debe Informar al usuario lo siguiente:
// a)La cantidad de temperaturas pares.
// b)El nombre del pais con menos habitantes
// c)la cantidad de paises de america que tienen menos de 0 grados .
// d)el promedio de habitantes entre los paises ingresados .
// e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
// */

// function mostrar() {
//     let continente;
//     let paisIngresado;
//     let cantidadDeHabitantes;
//     let temperaturaIngresada;

//     let contadorTemperaturasPares;
//     let banderaMenosHabitantes;
//     let nombrePaisMenosHabitantes;
//     let cantidadMenosHabitantes;
//     let cantidadDePaisesAmericanosFrios;
//     let promedioDeHabitantes;
//     let acumDeHabitantesTotales;
//     let banderaTemperaturaMinima;
//     let nombrePaisMinTemperatura;
//     let tempMinima;

//     contadorTemperaturasPares = 0;
//     banderaMenosHabitantes = true;
//     cantidadDePaisesAmericanosFrios = 0;
//     acumDeHabitantesTotales = 0;
//     banderaTemperaturaMinima = true;

//     for (let i = 0; i < 5; i++) {

//         continente = prompt("Ingrese continente entre america , asia , europa y africa");
//         while (continente != "america" && continente != "asia" && continente != "europa" && continente != "africa") {
//             continente = prompt("Error. Ingrese continente entre america , asia , europa y africa");
//         }

//         paisIngresado = prompt("Ingrese pais");

//         cantidadDeHabitantes = parseInt(prompt("Ingrese cantidad de habitantes en millones entre 1 y 2000 "));
//         while (isNaN(cantidadDeHabitantes) || cantidadDeHabitantes < 1 || cantidadDeHabitantes > 2000) {
//             cantidadDeHabitantes = parseInt(prompt("Errror. Ingrese cantidad de habitantes en millones entre 1 y 2000 "));
//         }

//         temperaturaIngresada = parseFloat(prompt("Ingrese la temperaruta promedio que se registra en su territorio(entre -50 y 50)"));
//         while (isNaN(temperaturaIngresada) || temperaturaIngresada < -50 || temperaturaIngresada > 50) {
//             temperaturaIngresada = parseFloat(prompt("Errror. Ingrese la temperaruta promedio que se registra en su territorio(entre -50 y 50)"));
//         }
//         //a)La cantidad de temperaturas pares.
//         if (temperaturaIngresada % 2 == 0) {
//             contadorTemperaturasPares = contadorTemperaturasPares + 1;
//         }
//         //b)El nombre del pais con menos habitantes  Ingreso actual       menor Ingreso
//         if (banderaMenosHabitantes == true || cantidadMenosHabitantes > cantidadDeHabitantes) {
//             cantidadMenosHabitantes = cantidadDeHabitantes;
//             nombrePaisMenosHabitantes = paisIngresado;
//             banderaMenosHabitantes = false;
//         }

//         //c)la cantidad de paises de america que tienen menos de 0 grados .
//         switch (continente) {
//             case "america":
//                 if (temperaturaIngresada < 0) {
//                     cantidadDePaisesAmericanosFrios = cantidadDePaisesAmericanosFrios + 1;
//                 }
//                 break;
//         }
//         //e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
//         if (banderaTemperaturaMinima == true || tempMinima > temperaturaIngresada) {
//             tempMinima = temperaturaIngresada;
//             nombrePaisMinTemperatura = paisIngresado;
//             banderaTemperaturaMinima = false;
//         }

//         acumDeHabitantesTotales = acumDeHabitantesTotales + cantidadDeHabitantes;
//     }

//     //d)el promedio de habitantes entre los paises ingresados .
//     promedioDeHabitantes = acumDeHabitantesTotales / 5;

//     document.write("La cantidad de temperaturas pares es: " + contadorTemperaturasPares + "<br>");
//     document.write("El nombre del pais con menos habitantes: " + nombrePaisMenosHabitantes + "<br>");
//     document.write("la cantidad de paises de america que tienen menos de 0 grados: " + cantidadDePaisesAmericanosFrios + "<br>");
//     document.write("el promedio de habitantes entre los paises ingresados: " + promedioDeHabitantes + "<br>");
//     document.write("la temperatura mínima ingresada es: " + tempMinima + " y nombre del pais que registro esa temperatura: " + nombrePaisMinTemperatura + "<br>");

// }