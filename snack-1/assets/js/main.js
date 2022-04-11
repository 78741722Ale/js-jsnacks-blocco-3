/*
Descrizione:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. 
*/

const arrayCars = [
    // Primo modello - Audi
    {
        Marca: 'Audi',
        Modello: 'A3',
        Alimentazione: "benzina"
    },
    // Secondo modello - BMW
    {
        Marca: 'BWM',
        Modello: 'Serie 1',
        Alimentazione: 'diesel'
    },
    // Terzo modello - BMW
    {
        Marca: 'BWM',
        Modello: 'X5M Competition',
        Alimentazione: 'diesel'
    },
    // Quarto modello - Audi
    {
        Marca: 'Audi',
        Modello: 'A6',
        Alimentazione: 'diesel'
    },
    // Quinto modello - Fiat
    {
        Marca: 'Fiat',
        Modello: 'panda',
        Alimentazione: 'diesel'
    },
    // Sesto modello - Fiat
    {
        Marca: 'Fiat',
        Modello: 'Tipo',
        Alimentazione: 'diesel'
    },
    // Settimo modello - Nissan
    {
        Marca: 'Nissan',
        Modello: 'Micra',
        Alimentazione: 'elettrico'
    },
    // Ottavo modello - Opel
    {
        Marca: 'Opel',
        Modello: 'Astra',
        Alimentazione: 'gpl'
    },
    // Nono modello - Volvo
    {
        Marca: 'Volvo',
        Modello: 'XC90',
        Alimentazione: 'elettrico'
    },
    // Decimo modello - Tesla
    {
        Marca: 'Tesla',
        Modello: 'Model 3',
        Alimentazione: 'elettrico'
    },
]

// Verifica in console log
console.log(arrayCars);

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina,

// Array auto benza
const autoBenzina = arrayCars.filter(car => {
    return car.Alimentazione === "benzina"
})
console.log(autoBenzina);

// Array Auto Diesel
const autoDiesel = arrayCars.filter(car => {
    return car.Alimentazione === 'diesel'
})
console.log(autoDiesel);

// Tutte le altre auto
const otherCars = arrayCars.filter(car => {
    if (car.Alimentazione === 'diesel') {
        return false
    } else if (car.Alimentazione === "benzina") {
        return false
    } else {
        return true
    }
})
console.log(otherCars);
