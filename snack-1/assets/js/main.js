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



let arr_weight = [];

for(let i = 0; i < bikes.length; i++ ) {

    arr_weight.push(bikes[i].weight);

}



let minore = arr_weight[0]

for(let i = 0; i < arr_weight.length; i++ ) {

    console.log(arr_weight[i], minore)

    if (arr_weight[i] < minore) {
        minore = arr_weight[i];
    }

}

const bodyEl = document.querySelector('body');
bodyEl.innerText = minore



