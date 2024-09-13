function sumaNumerosArray(numeros){
    let sumTemp = 0;
    for(let i = 0; i < numeros.length; i++){
        sumTemp = sumTemp + numeros[i]
    }
    return sumTemp;
}

function promedioNumerosArray(numeros){
    let sumTemp = sumaNumerosArray(numeros);
    let promedioTemp = sumTemp / numeros.length;
    return promedioTemp;
}

function stringAMayusculas(palabras, palabrasMayuscula){
    for(let i = 0; i < palabras.length; i++){
        let palabraTemp = palabras[i];
        let nuevaPalabra = '';

        for(let j = 0; j < palabraTemp.length; j++){
            nuevaPalabra += palabraTemp[j].toUpperCase();
        }
        palabrasMayuscula[i] = nuevaPalabra;
    }
    return palabrasMayuscula;
}

function numerosParesArray(numeros, numerosPares){
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0){
            numerosPares.push(numeros[i]);
        }
    }
    return numerosPares;
}


const numeros = [1, 2, 3, 4, 5];
const palabras = ['Hola', 'Adios', 'Saludos'];
let sumaNumeros = sumaNumerosArray(numeros);
console.log("La suma de los números del arreglo números es: " + sumaNumeros);

let promNumeros = promedioNumerosArray(numeros);
console.log("El promedio de los números del arreglo números es: " + promNumeros);

let palabrasMayuscula = [];
let numerosPares = [];
console.log("Strings antes: " + palabras);
palabrasMayuscula = stringAMayusculas(palabras, palabrasMayuscula);
console.log("String a mayúsculas: " + palabrasMayuscula);

console.log("Números antes: " + numeros);
numerosPares = numerosParesArray(numeros, numerosPares);
console.log("Números pares: " + numerosPares);
