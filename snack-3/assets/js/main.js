/* 
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
*/

// Crea un array di oggetti che rappresentano degli animali.

const arrayAnimals = [
    // Ogni animale ha un nome, una famiglia e una classe.
    { 
    nome: 'leone', 
        famiglia: 'felidi', 
        classe: 'mammiferi' 
    },
    {   
        nome: 'cane', 
        famiglia: 'canidi', 
        classe: 'mammiferi' },
    {   
        nome: 'gallina', 
        famiglia: 'fasianidi', 
        classe: 'uccelli' 
    }
];
console.log(arrayAnimals);

// Crea un nuovo array con la lista dei mammiferi
const mammiferi = arrayAnimals.filter(element => {
    if (element.classe === 'mammiferi') {
        return true
    } else {
        return false
    }
});
console.log(mammiferi);