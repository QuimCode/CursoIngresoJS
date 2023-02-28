/******************************************************************************

Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.

*******************************************************************************/

// function mostrar() {

//     let banderaInicio;
//     let banderaAvellaneda;
//     let banderaLanus;
//     let banderaCABA;

//     let deposito;

//     let depoAvellaneda;
//     let depoLanus;
//     let depoCABA;

//     let contador;
//     let contAvellaneda;
//     let contLanus;
//     let contCABA;

//     let descripcionProducto;
//     let pesoProducto;

//     banderaInicio = true;
//     banderaAvellaneda = true;
//     banderaLanus = true;
//     banderaCABA = true;

//     contAvellaneda = 0;
//     contLanus = 0;
//     contCABA = 0;

//     depoAvellaneda = 0;
//     depoLanus = 0;
//     depoCABA = 0;

//     while (banderaInicio == true) {
//         descripcionProducto = prompt("Ingrese la descripcion de su producto para guardar en el almacen.")
//         while (!isNaN(banderaInicio)) {
//             banderaInicio = prompt("Error. Ingrese su descripcion: ");
//         }


//         deposito = prompt("Ingrese el deposito en el cual va a ingresar su producto, 'Avellaneda, 'Lanus' o 'CABA'.")
//         while (!isNaN(deposito) && deposito != 'Avellaneda' && deposito != 'Lanus' && deposito != 'CABA') {
//             deposito = prompt("Error. Ingrese su descripcion correctamente ('Avellaneda, 'Lanus' o 'CABA')");
//         }

//         pesoProducto = parseInt(prompt("Ingrese el peso del producto que ingreso."))
//         while (isNaN(pesoProducto)) {
//             pesoProducto = parseInt(prompt("Error, ingrese un valor numerico."))
//         }

//         switch (deposito) {
//             case "Avellaneda":
//                 contAvellaneda = contAvellaneda + 1;
//                 depoAvellaneda = contAvellaneda + pesoProducto
//                 break;
//             case "Lanus":
//                 contLanus = contLanus + 1;
//                 depoLanus = contLanus + pesoProducto;
//                 break;
//             case "CABA":
//                 contCABA = contCABA + 1;
//                 depoCABA = contCABA + pesoProducto;
//                 break;
//         }
//     }
//     // let ingPeso;
//     // let ingNacionalidad;
//     // let ingNumero;
//     // let ingPrecio;

// }

/*
Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Precio total del paquete de viaje (validar el rango posible de precio).
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.
Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

La empresa tambien nos pide realizar los algoritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor.
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.
*/

function mostrar() {

    let bandera

    let nomVendedor
    let nomComprador

    let cantPasaje
    let precioPasaje
    let pasajeNaIn
    let precioPak
    let pakVendidos
    let tipoAsiento

    let pesosJuntados;
    let cantPesos;
    let cantPesosQui;
    let cantPesosPep;
    let cantPesosHue;

    let porcentajeNaIn

    bandera = true;
    precioPasaje = 10000;
    cantPesos = 0;

    while (bandera == true) {

        nomVendedor = prompt("Ah que vendedor le va a comprar ? ('Pepepeposo', 'Quinoto' y 'Huesos').")
        while (!isNaN(nomVendedor) && nomVendedor != 'Pepepeposo' && nomVendedor != 'Quinoto' && nomVendedor != 'Huesos') {
            nomVendedor = prompt("Incorrecto, ah que vendedor le va a comprar ? ('Pepepeposo', 'Quinoto' y 'Huesos').")
        }

        nomComprador = prompt("Como se llama ?")
        while (!isNaN(nomComprador)) {
            nomComprador = prompt("Incorrecto, ¿ Cual es su nombre ?).")
        }

        cantPasaje = prompt("Indique la cantidad de pasajes a comprar, desde 1 a 5")
        while (isNaN(cantPasaje) && cantPasaje > 0 && cantPasaje < 6) {
            cantPasaje = prompt("Incorrecto, ingrese un numero de pasajes, mayor a 0 o menor 5).")
        }

        tipoAsiento = prompt("Su asiento va a ser 'Economica', 'Ejecutiva' o 'Primera Clase'?.")
        while (!isNaN(tipoAsiento) && tipoAsiento != 'Economica' && tipoAsiento == 'Ejecutiva' && tipoAsiento == 'Primera Clase') {
            nomComprador = prompt("Incorrecto, ingrese 'Economica', 'Ejecutiva' o 'Primera Clase'.")
        }

        tipoViaje = prompt("Eliga si su viaje tiene 'Escala' o 'Directo'")
        while (!isNaN(tipoViaje) && tipoViaje != 'Escala' && tipoViaje == 'Directo') {
            nomComprador = prompt("Incorrecto, ingrese 'Escala' o 'Directo'.")
        }

        pasajeNaIn = prompt("Su pasaje va a ser 'Internacional' o 'Nacional'?.")
        while (!isNaN(pasajeNaIn) && pasajeNaIn != 'Internacional' && pasajeNaIn == 'Nacional') {
            pasajeNaIn = prompt("Incorrecto, ingrese 'Economica', 'Ejecutiva' o 'Primera Clase'.")
        }

        precioPak = cantPasaje * precioPasaje;
        pakVendidos = precioPak;
        let mensajePak = "El precio de su pack seria de " + precioPak + " pesos."
        alert(mensajePak);

        // A) El total de pesos recaudados de cada vendedor.
        switch (nomVendedor) {
            case 'Pepepeposo':
                cantPesosPep = cantPesos + pakVendidos
                break;
            case 'Quinoto':
                cantPesosQui = cantPesos + pakVendidos
                break;
            case 'Huesos':
                cantPesosHue = cantPesos + pakVendidos
                break;
        }

        // B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.
        if (cantPesosPep > cantPesosQui && cantPesosPep > cantPesosHue) {
            let mensajepep = "La Cantidad de pesos sumados por Pepe es " + cantPesosPep;
            alert(mensajepep);
        }
        else if (cantPesosQui > cantPesosQui && cantPesosQui > cantPesosHue) {
            let mensajeQui = "La Cantidad de pesos sumados por Pepe es " + cantPesosQui;
            alert(mensajeQui);
        } else {
            let mensajeHue = "La Cantidad de pesos sumados por Pepe es " + cantPesosHue;
            alert(mensajeHue);
        }
        // C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.
    }
}
