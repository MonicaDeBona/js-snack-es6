/*
1. Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
2. Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.
*/


const student = {
    name : 'Monica',
    surname : 'De Bona',
    age : 31,
};

for (let key in student) {
    console.log(student[key]);
}

const class81 = [
    {
        'name' : 'Monica',
        'surname' : 'De Bona',
        'age': 31,
    },
    {
        'name' : 'Jhon',
        'surname' : 'Doe',
        'age': 31,
    }
];

for (let i = 0; i<class81.length; i++) {
    console.log(class81[i]);
}

// for (let i = 0; i<class81.length; i++) {
//     const actualClass = class81[i];
//         for(let key in actualClass) {
//             console.log(key);
//             console.log(actualClass[key]);
//         }
//     }



