const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

// Calcular el mayor de los tres números
if (numero1 > numero2 && numero1 > numero3) {
    console.log("El número mayor de los tres es: " + numero1);
} else if (numero2 > numero3 && numero2 > numero1) {
    console.log("El número mayor de los tres es: " + numero2);
} else {
    console.log("El número mayor de los tres es: " + numero3);
}

// Calculr el menor de los tres números
if (numero1 < numero2 && numero1 < numero3) {
    console.log("El número menor de los tres es: " + numero1);
} else if (numero2 < numero3 && numero2 < numero1) {
    console.log("El número menor de los tres es: " + numero2);
} else {
    console.log("El número menor de los tres es: " + numero3);
}

// Calcular si el primer número es par o impar
if (numero1 % 2 == 0){
    console.log("El número 1 " + numero1 + " es par")
} else {
    console.log("El número 1 " + numero1 + " es impar")
}

// Calcular si el segundo número es par o impar
if (numero2 % 2 == 0){
    console.log("El número 2 " + numero2 + " es par")
} else {
    console.log("El número 2 " + numero2 + " es impar")
}

// Calcular si el tercer número es par o impar
if (numero3 % 2 == 0){
    console.log("El número 3 " + numero3 + " es par")
} else {
    console.log("El número 3 " + numero3 + " es impar")
}

// Calcular si el primer número es múltiplo de 5
if (numero1 % 5 == 0){
    console.log("El número 1 " + numero1 + " es múltiplo de 5")
} else {
    console.log("El número 1 " + numero1 + " NO es múltiplo de 5")
}

// Calcular si el segundo número es múltiplo de 5
if (numero2 % 5 == 0){
    console.log("El número 2 " + numero2 + " es múltiplo de 5")
} else {
    console.log("El número 2 " + numero2 + " NO es múltiplo de 5")
}

// Calcular si el tercer número es múltiplo de 5
if (numero3 % 5 == 0){
    console.log("El número 3 " + numero3 + " es múltiplo de 5")
} else {
    console.log("El número 3 " + numero3 + " NO es múltiplo de 5")
}
