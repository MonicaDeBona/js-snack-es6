/***

Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

*/

const people = [
    {
        name: 'Maria', 
        lastName: 'Castagneri', 
        age: '31'
    },
    {
        name: 'Marco', 
        lastName: 'Sante', 
        age: '16'
    },
    {
        name: 'Luca', 
        lastName: 'Salvo', 
        age: '13'
    },
    {
        name: 'Elisa', 
        lastName: 'Rema', 
        age: '45'
    },
    {
        name: 'Marina', 
        lastName: 'Arco', 
        age: '57'
    },
];

const drives = people.filter((drive) => drive.age >= 18);
console.log(drives);

