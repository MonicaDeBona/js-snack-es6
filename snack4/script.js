// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI

const animals = [
    {
        nome: 'leone', 
        famiglia: 'felidi', 
        classe: 'mammiferi'
    },
    { 
        nome: 'cane', 
        famiglia: 'canidi', 
        classe: 'mammiferi' 
    },
    { 
        nome: 'gallina', 
        famiglia: 'fasianidi', 
        classe: 'uccelli' 
    },
    {
        nome: 'gatto', 
        famiglia: 'felidi', 
        classe: 'mammiferi'
    },
    {
        nome: 'leone', 
        famiglia: 'felidi', 
        classe: 'mammiferi'
    },
    {
        nome: 'leone', 
        famiglia: 'felidi', 
        classe: 'mammiferi'
    },
];

const animalsName = animals.map(animalName => {
    animalName.nome = animalName.nome.charAt(0) + animalName.nome.substring(1).toUpperCase();
    return animalName;
});
console.log(animalsName);


const mammals = animals.filter((animal) => animal.classe === 'mammiferi');
console.log(mammals);
