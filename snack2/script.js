/*
    Crea un array composto da 10 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
    Infine stampa separatamente i 3 array.
 */

const carsBenzina = [
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
];

for (let i = 0; i < carsBenzina.length; i++) {
    console.log(carsBenzina[i]);
}

const carsDiesel = [
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
];

for (let i = 0; i < carsDiesel.length; i++) {
    console.log(carsDiesel[i]);
}

const carsGpl = [
    {
        marca : 'Renault',
        modello : 'Clio',
        alimentazione : 'Gpl'
    },
    {
        marca : 'Hyundai',
        modello : 'i20',
        alimentazione : 'Gpl'
    },
    {
        marca : 'Kia',
        modello : 'Sportage',
        alimentazione : 'Gpl'
    },
];

for (let i = 0; i < carsGpl.length; i++) {
    console.log(carsGpl[i]);
}