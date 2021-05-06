// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// funzioni
function numeroRandom(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function controlloNumeroInArray (elemento,array){
    for(var i=0; i < array.length; i++){
        if(elemento == array[i]){
            return true;
        }   
    }
    return false;
}

// array numeri casuali vuoto
var numeriCasuali = [];
// generazione e push dei numeri casuali nell'array numeriCasuali
for (var i = 0; i < 5; i++) {
    numeriCasuali.push(numeroRandom(1,100)); 
}
console.log(numeriCasuali);

// alert coi numeri casuali generati
alert("cinque numeri casuali\n" + numeriCasuali);

// array utente vuoto dove vanno solo i numeri corretti
var numeriUtentePresi = [];

// numero richiesto all'utente
var numeroRichiesto;

setTimeout(function() {

    for (var i = 0; i < 5; i++) {
        
        numeroRichiesto = parseInt(prompt("inserisci il numero"));
        // se il numero richiesto è uguale al numero casuale pushalo nell'array numeriUtentePresi
        if(controlloNumeroInArray(numeroRichiesto,numeriCasuali)){
            numeriUtentePresi.push(numeroRichiesto);
            // stampa ogni numero preso
            console.log(numeriUtentePresi);
        }
    }
    // punti fatti
    console.log("hai fatto", numeriUtentePresi.length, "punti, i tuoi numeri sono", numeriUtentePresi);
}, 3000);


