/* A partire da un array di stringhe, crea un secondo array formattando le 
stringhe del primo array in minuscolo e con l’iniziale maiuscola. */

// Crea un array minuscolo ma con un elemento UPPERCASE
const arrayUpper = ["fiat", "AUDI", "mercedes", "bmw"]

// Concatenazione tramite arrow Function e map (refactoring)
const arrayLowerCase = arrayUpper.map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase())
console.log(arrayLowerCase);


// Metodo for/each (funziona ma ho fatto refactoring)
// const arrayLowerCase = arrayUpper.forEach((element, i, array) => {
//     // Salvo in una costante il risultato
//     let array = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//     console.log(array);
//     return array
// })


