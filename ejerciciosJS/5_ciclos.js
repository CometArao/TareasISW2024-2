// Imprimir del 1 al 10
console.log("Imprimir del 1 al 10")
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log("\n")

// Imprimir del 10 al 1
console.log("Imprimir del 10 al 1")
for (let i = 10; i > 0; i--) {
    console.log(i)
}
console.log("\n")

// Imprimir del 1 al 10, solo números pares
console.log("Imprimir del 1 al 10, solo números pares")
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0){
        console.log(i)
    }
}
console.log("\n")

// Imprimir del 1 al 10, solo números impares
console.log("Imprimir del 1 al 10, solo números impares")
for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0){
        console.log(i)
    }
}
console.log("\n")

// Imprimir del 1 al 10, solo los múltiplos de 3
console.log("Imprimir del 1 al 10, solo los múltiplos de 3")
for (let i = 1; i <= 10; i++) {
    if (i % 3 == 0){
        console.log(i)
    }
}
console.log("\n")

// Imprimir del 1 al 10, solo los múltiplos de 5
console.log("Imprimir del 1 al 10, solo los múltiplos de 5")
for (let i = 1; i <= 10; i++) {
    if (i % 5 == 0){
        console.log(i)
    }
}
console.log("\n")

// Imprimir del 1 al 10, solo los múltiplos de 3 y 5
console.log("Imprimir del 1 al 10, solo los múltiplos de 3 y 5")
for (let i = 1; i <= 10; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)){
        console.log(i)
    }
}
console.log("\n")

// Imprimir del 1 al 10, solo los múltiplos de 3 o 5
console.log("Imprimir del 1 al 10, solo los múltiplos de 3 o 5")
for (let i = 1; i <= 10; i++) {
    if ((i % 3 == 0) || (i % 5 == 0)){
        console.log(i)
    }
}
console.log("\n")