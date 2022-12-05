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
        varietà : 'romana',
        peso : 15,
        lunghezza : 10,
    },
    {
        varietà : 'romana',
        peso : 15,
        lunghezza : 10,
    },
    {
        varietà : 'romana',
        peso : 15,
        lunghezza : 10,
    },
    {
        varietà : 'romana',
        peso : 15,
        lunghezza : 10,
    },
    {
        varietà : 'romana',
        peso : 15,
        lunghezza : 10,
    },
    {
        varietà : 'romana',
        peso : 15,
        lunghezza : 10,
    },
    {
        varietà : 'romana',
        peso : 15,
        lunghezza : 10,
    },
    {
        varietà : 'romana',
        peso : 15,
        lunghezza : 10,
    },
    {
        varietà : 'romana',
        peso : 15,
        lunghezza : 10,
    },
];

const weight = [];
for (let i = 0; i < zucchine.length; i++){

const currentZucchine = zucchine[i]
weight.push(currentZucchine.peso);

}
console.log(weight);

let sum = 0;
for(let i = 0; i < weight.length; i++){

sum += weight[i];

}
console.log(sum);