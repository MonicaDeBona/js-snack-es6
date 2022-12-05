/**
Crea 10 oggetti che rappresentano una zucchina, 
indicandone per ognuno varietà, peso e lunghezza.

Calcola quanto pesano tutte le zucchine.
*/


const zucchine = [
    {
        varietà : 'romana',
        peso : 15,
        lunghezza : 10,
    },
    {
        varietà : 'pugliese',
        peso : 22,
        lunghezza : 10,
    },
    {
        varietà : 'lunga',
        peso : 25,
        lunghezza : 10,
    },
    {
        varietà : 'triestina',
        peso : 11,
        lunghezza : 10,
    },
    {
        varietà : 'fiorentina',
        peso : 10,
        lunghezza : 10,
    },
    {
        varietà : 'corta',
        peso : 7,
        lunghezza : 10,
    },
    {
        varietà : 'siciliana',
        peso : 5,
        lunghezza : 10,
    },
    {
        varietà : 'napoletana',
        peso : 15,
        lunghezza : 10,
    },
    {
        varietà : 'nera',
        peso : 31,
        lunghezza : 10,
    },
    {
        varietà : 'trombetta',
        peso : 25,
        lunghezza : 10,
    },
];

let pesoTotale = 0;
let lunghezzaTotale = 0;

for (let i = 0; i < zucchine.length; i++) {
    pesoTotale = pesoTotale + zucchine[i].peso;
}

console.log(pesoTotale);
console.log(pesoTotale / zucchine.length);