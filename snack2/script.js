/*
    Crea un array composto da 10 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
    Infine stampa separatamente i 3 array.
 */

const cars = [
    {
        marca : 'Fiat',
        modello : 'Panda',
        alimentazione : 'benzina'
    },
    {
        marca : 'Lancia',
        modello : 'Ypsilon',
        alimentazione : 'benzina'
    },
    {
        marca : 'Fiat',
        modello : 'Punto',
        alimentazione : 'benzina'
    },
    {
        marca : 'Audi',
        modello : 'A1',
        alimentazione : 'diesel'
    },
    {
        marca : 'Alfa Romeo',
        modello : 'Giulia',
        alimentazione : 'diesel'
    },
    {
        marca : 'Bmw',
        modello : 'Nazca M12',
        alimentazione : 'diesel'
    },
    {
        marca : 'Renault',
        modello : 'Clio',
        alimentazione : 'gpl'
    },
    {
        marca : 'Honda',
        modello : 'HondaE',
        alimentazione : 'elettrica'
    },
    {
        marca : 'Kia',
        modello : 'Sportage',
        alimentazione : 'gpl'
    },
    {
        marca : 'hyundai',
        modello : 'Ioniq5',
        alimentazione : 'elettrica'
    },
];

const carDiesel = [];
const carBenzina = [];
const carMixed = [];

for (let i = 0; i < cars.length; i++) {
    const currentCars = cars[i];
    if (currentCars.alimentazione === 'benzina') {
        carBenzina.push(currentCars);
    } else if(currentCars.alimentazione === 'diesel') {
        carDiesel.push(currentCars);
    } else {
        carMixed.push(currentCars);
    }
}

console.log(carBenzina, carDiesel, carMixed);
