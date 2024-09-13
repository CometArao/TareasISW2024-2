const persona = {
    nombre: "Juan Pérez",
    edad: 30,
    género: "Masculino"
};

const caja = {
    cuadernos: 5,
    lápices: 10,
    papel: 100,
    fotografías: 20,
    estado: true
};

console.log(persona); // {nombre: 'Juan Pérez', edad: 30, género: 'Masculino'}
console.log(persona.nombre); // Juan Pérez
console.log(persona.edad); // 30
console.log(persona.género); // Masculino
console.log(typeof persona); // object
console.log(typeof persona.nombre); // string
console.log(typeof persona.edad); // number
console.log(typeof persona.género); // string

console.log(caja); // {cuadernos: 5, lápices: 10, papel: 100, fotografías: 20, estado: true}
console.log(caja.cuadernos); // 5
console.log(caja.lápices); // 10
console.log(caja.papel); // 100
console.log(caja.fotografías); // 20
console.log(caja.estado); // true
console.log(typeof caja); // object
console.log(typeof caja.cuadernos); // number
console.log(typeof caja.lápices); // number
console.log(typeof caja.papel); // number
console.log(typeof caja.fotografías); // number
console.log(typeof caja.estado); // boolean
