/*3.Quimey Alejo Fontan
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
    let gradoFahrenheit
    let gradoCentigrado

    gradoFahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    gradoCentigrado = (gradoFahrenheit - 32) * 5 / 9;

    alert("Los " + gradoFahrenheit + " Fahrenheit ingresados son " + gradoCentigrado + " Centigrados.");
}


function CentigradosFahrenheit() {
    let gradoCentigrado
    let gradoFahrenheit

    gradoCentigrado = parseFloat(document.getElementById("txtIdTemperatura").value);

    gradoFahrenheit = (gradoCentigrado * 9 / 5) + 32;

    alert("Los " + gradoCentigrado + " Centigrados ingresados son " + gradoFahrenheit + " Fahrenheit.");
}

