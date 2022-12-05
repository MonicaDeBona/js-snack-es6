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
        alimentazione : 'Benzina'
    },
    {
        marca : 'Lancia',
        modello : 'Ypsilon',
        alimentazione : 'Benzina'
    },
    {
        marca : 'Fiat',
        modello : 'Punto',
        alimentazione : 'Benzina'
    },
    {
        marca : 'Audi',
        modello : 'A1',
        alimentazione : 'Diesel'
    },
    {
        marca : 'Alfa Romeo',
        modello : 'Giulia',
        alimentazione : 'Diesel'
    },
    {
        marca : 'Bmw',
        modello : 'Nazca M12',
        alimentazione : 'Diesel'
    },
    {
        marca : 'Renault',
        modello : 'Clio',
        alimentazione : 'Gpl'
    },
    {
        marca : 'Honda',
        modello : 'HondaE',
        alimentazione : 'Elettrica'
    },
    {
        marca : 'Kia',
        modello : 'Sportage',
        alimentazione : 'Gpl'
    },
    {
        marca : 'hyundai',
        modello : 'Ioniq5',
        alimentazione : 'Elettrica'
    },
];

const carDiesel = [];
const carBenzina = [];
const carMixed = [];

for (let i = 0; i < cars.length; i++) {
    const currentCars = cars[i];
    if (currentCars === 'Benzina') {
        carBenzina.push(currentCars);
    } else if(currentCars === 'Diesel') {
        carDiesel.push(currentCars);
    } else {
        carMixed.push(currentCars);
    }
}

console.log(carBenzina, carDiesel, carMixed);
