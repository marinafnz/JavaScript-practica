"use strict";

// const responseElement = document.getElementById("response");

const numbers = [12, 5, 8, 20, 3, 15, 10, 7, 18, 4];

export const highest = (arr) => {
    const highestNum = Math.max(...numbers)
    return highestNum
};

export const lowest = (arr) => {
    const lowestNum = Math.min(...numbers)
    return lowestNum
}
export const media = (arr) => {
    let sumaNumeros = 0;
    for (let i = 0 ; i < numbers.length ; i++){
        let numeroActual = numbers[i]
        sumaNumeros += numeroActual
    }
    const resultadoMedia = sumaNumeros / numbers.length
    
    return resultadoMedia
}

export const pares = (arr) => {
    let numerosPares = numbers.filter(num => num % 2 === 0)
    let totalPares = numerosPares.length
    return totalPares
}

export const altos = (arr) => {
    let numerosMasde = numbers.filter(num => num >= 15 )
    return numerosMasde
}

console.log(lowest());
console.log(highest());
console.log(media());
console.log(pares());
console.log(altos());

