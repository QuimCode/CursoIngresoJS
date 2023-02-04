/*2.Quimey Alejo Fontan	
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    let largoTerreno;
    let anchoTerreno;
    let hilosAlambre = 3;
    let ladosTerreno = 2;
    let sumaLarAnc;


    largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);


    sumaLarAnc = (largoTerreno + anchoTerreno) * ladosTerreno * hilosAlambre;

    alert("La Cantidad de alambre a comprar es ... " + sumaLarAnc);
}


function Circulo() {
    let largoTerreno;
    let anchoTerreno;
    let radioTerreno;
    let PI = 3.14;
    let hilosAlambre = 3;
    let radioCirculo;
    let sumaLarAncRad;

    largoTerreno = parseFloat(document.getElementById("txtIdRadio").value);
    anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);
    radioTerreno = parseFloat(document.getElementById("txtIdRadio").value);

    radioCirculo = 2 * radioTerreno;
    radioCirculo = radioCirculo * PI;
    sumaLarAncRad = (largoTerreno + anchoTerreno + radioCirculo) * hilosAlambre;

    alert("La Cantidad de alambre a comprar es ... " + sumaLarAncRad);
}


function Materiales() {

    let metroLargo;
    let metroAncho;
    let metroCuadrado;
    let bolsaCemento = 2;
    let bolsaCal = 3;
    let cantidadDeBolsaCal;
    let cantidadDeBolsaCem;

    metroLargo = parseFloat(document.getElementById("txtIdLargo").value);
    metroAncho = parseFloat(document.getElementById("txtIdAncho").value);

    metroCuadrado = metroAncho * metroLargo;
    cantidadDeBolsaCem = bolsaCemento * metroCuadrado;
    cantidadDeBolsaCal = bolsaCal * metroCuadrado;

    alert("La cantidad de bolsas de Cemento a usar son ... " + cantidadDeBolsaCem);
    alert("La cantidad de bolsas de Cal a usar son ... " + cantidadDeBolsaCal);
}


// Perimetro de un circulo es 2 * Pi (3,14) * R (radio)
// Para sacar el Area necesitada para calcular la cantidad de bolsas, se usa el calculo de Ancho * Largo (ingresado por el usuario),
// para sacar las bolsas de cal o cemento de multiplican por 2 en base a los metros cudrados dados por el largo * ancho.
