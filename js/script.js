/* Consegna:
Dati tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
creare un carosello come nella foto allegata.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
 - titolo e
 - testo.
Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.

BONUS:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso l’alto, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso il basso.

Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell’esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz’ora, così da non perdere di vista il focus dell’esercizio. */

//creo array per immagini, titoli e testi
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const containerImages = document.querySelector('.container-big-img');

//inserisco immagini nel DOM da array
for (let index = 0; index < items.length; index++) {
    let image;

    //se prima immagine, aggiungo classe first e active
    if (index == 0) {
        image = `<div class="thumb first active">
                    <img src="${items[index]}" alt="">
                </div>`
    //se ultima immagine, aggiungo classe last
    } else if (index == items.length - 1){
        image = `<div class="thumb last">
                    <img src="${items[index]}" alt="">
                </div>`
    //altrimenti
    } else {
        image = `<div class="thumb">
                    <img src="${items[index]}" alt="">
                </div>`
    }
    
    containerImages.innerHTML += image;
}


//cliccare sulla freccia in giù e mostrare immagine successiva, eliminare la classe active all'immagine precedente e aggiungerla a quella da mostrare

const arrowDown = document.querySelector('.container-small-img .arrow-down');
const arrowUp = document.querySelector('.container-small-img .arrow-up');

//script sul click della freccia in basso
arrowDown.addEventListener('click', function () {

    const imageActive = document.querySelector('.container-big-img .active');

    let classes = imageActive.classList;
    let last = false;

    //controllo le classi di ogni immagine
    for (let index = 0; index < classes.length; index++) {
        const element = classes[index];
        console.log(index, element);

        //se imageActive ha classe last
        if (element == 'last') {
            last = true;
        }

    }

    //se non è l'ultima immagine
    if (last == false) {
        imageActive.classList.remove('active');

        const imageNext = imageActive.nextElementSibling;
        imageNext.classList.add('active');
    }
})

//script sul click della freccia in alto
arrowUp.addEventListener('click', function () {
    const imageActive = document.querySelector('.container-big-img .active');

    let classes = imageActive.classList;
    let first = false;

    //controllo le classi di ogni immagine
    for (let index = 0; index < classes.length; index++) {
        const element = classes[index];
        console.log(index, element);

        //se imageActive ha classe first
        if (element == 'first') {
            first = true;
        }

    }

    //se non è la prima immagine
    if (first == false) {
        imageActive.classList.remove('active');

        const imageNext = imageActive.previousElementSibling;
        imageNext.classList.add('active');
    }

})