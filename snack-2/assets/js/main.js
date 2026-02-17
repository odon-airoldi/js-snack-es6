/*
Snack 2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/



// console.log(document.getElementById('odon'))
// console.log(document.querySelector('#odon'))


// function timer(numero) {
//     console.log('prova', numero);
// }

// setTimeout(function() {
//     timer(3);
//     console.log('quello che vuoi')
// }, 3000)

// setInterval(function(){
//     timer(5);
//     console.log('Questo si ripete')
// }, 3000)


// setTimeout(()=> {
//     console.log('arrow fuonction')
// }, 5000)

// setInterval(()=> {
//     console.log('arrow fuonction')
// }, 10000)


// secondo live

const displayEl = document.getElementById('display');
const startEl = document.querySelector('.btn-success');
const stopEl = document.querySelector('.btn-danger');
let result;

startEl.addEventListener('click', function() {
    stopEl.disabled = false
    startEl.disabled = true
    let contatore = 0;
    displayEl.innerText = contatore;

    result = setInterval(function( ) {
        contatore++
         displayEl.innerText = contatore;
    }, 1000)
    
})

stopEl.addEventListener('click', function() {
    clearInterval(result)
    stopEl.disabled = true
    startEl.disabled = false
})


// terzo live

const progressBarEl = document.querySelector('.progress-bar')
const uploadButtonEl = document.getElementById('upload-button')
const messageEl = document.getElementById('message')

uploadButtonEl.addEventListener('click', function(){

    uploadButtonEl.disabled = true;

    let progress = 0;
    let progressPercentValue = progress + '%'

    progressBarEl.style.width = progressPercentValue;
    progressBarEl.innerText = progressPercentValue

    const intervalId = setInterval(function() {

        if(progress === 100) {
            messageEl.classList.remove('d-none');
            clearInterval(intervalId);
            uploadButtonEl.disabled = false;
            uploadButtonEl.innerText = 'Upload'

        } else {
            progressPercentValue = ++progress + '%';
            progressBarEl.style.width = progressPercentValue;
            progressBarEl.innerText = progressPercentValue
            uploadButtonEl.innerText = 'Uploading'

        }


    }, 10)
})


const my_dog = {
    name: 'Orso',
    age: 11,
    color: 'black',
    character: ['affectionate', 'tenacious', 'stubborn']
}

console.log(my_dog.name)

console.log(my_dog['age'])

my_dog.age = 10

const dogSex = 'male'

for (let key in my_dog) {
    console.log(key, my_dog[key])
}


// crea un array di 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso, lunghezza
// calcola quanto pesano tutte le zucchine


const zucchinis = [

    {
        variety : 'zuchini',
        weight : 11,
        length : 10
    },
    {
        variety : 'zuchini',
        weight : 12,
        length : 19
    },
    {
        variety : 'zuchini',
        weight : 13,
        length : 18
    },
    {
        variety : 'zuchini',
        weight : 14,
        length : 17
    },
    {
        variety : 'zuchini',
        weight : 15,
        length : 16
    },
    {
        variety : 'zuchini',
        weight : 16,
        length : 15
    },
    {
        variety : 'zuchini',
        weight : 17,
        length : 14
    },
    {
        variety : 'zuchini',
        weight : 18,
        length : 13
    },
    {
        variety : 'zuchini',
        weight : 19,
        length : 12
    },
    {
        variety : 'zuchini',
        weight : 20,
        length : 11
    }
    
]

// let sum = 0;

// for (let i = 0; i < zucchinis.length; i++) {
//     const zucchinaObj = zucchinis[i];
    
//     sum += zucchinaObj.weight

// }

// console.log(sum)



// create 10 oggetti che rapppresentazione
// dividi in due array separati le zucchine che misurano meno o più di 15 cm
// stampa separatamente quanto pesano i due gruppi

let zucchinis_pesanti = [];
let zucchinis_leggeri = [];

for (let i = 0; i < zucchinis.length; i++) {
    const zuchini = zucchinis[i];
    
    if(zuchini.weight >= 15) {
        zucchinis_pesanti.push(zuchini.weight)
    } else {
        zucchinis_leggeri.push(zuchini.weight)
    }

    // sum += zuchini.weight

}

function sum_group_zucchinis(group) {

    let sum = 0;

    for (let i = 0; i < group.length; i++) {
        const zucchinaObj = group[i];
        
        sum += zucchinaObj

    }

    console.log(sum)
}

sum_group_zucchinis(zucchinis_pesanti);
sum_group_zucchinis(zucchinis_leggeri);

