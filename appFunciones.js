//Crear una función que muestre "¡Hola, mundo!" en la consola.
function mostrarMensaje(elemento,texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto
    return;
}

mostrarMensaje('h1','Mostrar mensaje con una funcion');
mostrarMensaje('p','Mostrar otro mensaje con una funcion');

// function mostrarMensaje() {
//     console.log(`mensaje`);
//     return;
     
// }
// mostrarMensaje();

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function mostrarParametroNombre(nombre) {
    console.log(`Hola! ${nombre} bienvenido!`);
    return;   
}
mostrarParametroNombre('Jose');

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleDeNumero(numero) {
    let resultDoble = numero * 2; 
    console.log(`El doble de numero es ${resultDoble}`);
    return;
}
dobleDeNumero('3');

//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(num1, num2, num3) {
    let calcPromedio = (num1+num2+num3)/3;
    console.log(`El promedio es ${calcPromedio}`);
    return;
}
promedio(4,4,5);

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numMayor(num1,num2) {
    if (num1 > num2) {
        console.log(`El numero más grande ${num1}`);
    } else {
        console.log(`El numero más grande ${num2}`);
    } 
}
numMayor(1,2);

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function multiplicaPorSiMismo(num3) {
    let calcMultPorSiMismo = (num3*num3);
    console.log(`El resultado de multiplicar el parametro de entrada por si mismo ${calcMultPorSiMismo}`);
}
multiplicaPorSiMismo(3);
