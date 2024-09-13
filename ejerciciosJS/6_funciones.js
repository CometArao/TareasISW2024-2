function convertirMayusculas(palabra){
    return palabra.toUpperCase()
}

function convertirMinusculas(palabra){
    return palabra.toLowerCase()
}

function resta(numero1, numero2) {
    return numero1 - numero2
}

function multiplicacion(numero1, numero2) {
    return numero1 * numero2
}

function division(numero1, numero2) {
    return numero1 / numero2
}

function longitudString(palabra) {
    return palabra.length
}

console.log(convertirMayusculas("hola"));
console.log(convertirMinusculas("HOLA"));
console.log(resta(2, 3));
console.log(multiplicacion(2, 3));
console.log(division(2, 3));
console.log(longitudString("Soy programador"));