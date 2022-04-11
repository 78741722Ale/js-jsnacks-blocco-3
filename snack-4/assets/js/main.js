/* 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e 
cognome e l’indicazione se può guidare, in base all’età.
*/

// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.

const people = [
    // Prima persona
    {
        nome : "Luca",
        cognome : "Castro",
        età : 15
    },
    // Seconda persona
    {
        nome: "Andrea",
        cognome: "Deliri",
        età: 16
    },
    // Terza persona
    {
        nome: "Martina",
        cognome: "Dell'oca",
        età: 33
    },
    // Quarta persona
    {
        nome: "Franco",
        cognome: "Martinelli",
        età: 48
    },
    // Quinta persona
    {
        nome: "Fabiola",
        cognome: "Mergini",
        età: 13
    },
];
console.log(people);

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e 
// cognome e l’indicazione se può guidare, in base all’età.

const user_car = people.filter(element => {
    if (element.età < 18) {
        console.log(`${element.nome} non può guidare`);  
        return true
    } else {
        console.log(`${element.nome} può guidare`); 
        return false
    }
})
console.log(user_car);
