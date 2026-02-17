/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

// object array
const bikes = [
    {
        model_name : 'ABiCi_5',
        weight: 5
    },
    {
        model_name : 'ABiCi_13',
        weight: 13
    },
    {
        model_name : 'ABiCi_3',
        weight: 3
    },
    {
        model_name : 'ABiCi_21',
        weight: 21
    },
    {
        model_name : 'ABiCi_55',
        weight: 55
    },
    {
        model_name : 'ABiCi_2',
        weight: 2
    },
    {
        model_name : 'ABiCi_8',
        weight:8
    },
    {
        model_name : 'ABiCi_34',
        weight: 34
    }
]

let minore = bikes[0].weight

for(let i = 0; i < bikes.length; i++ ) {

    if (bikes[i].weight < minore) {
        minore = bikes[i].weight;
    }

}

const bodyEl = document.querySelector('body');
bodyEl.innerText = minore


