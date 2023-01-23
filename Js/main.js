// TRACCIA:

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// 1) Il prezzo del biglietto è definito in base ai km (0.21 € al km).
// 2) Va applicato uno sconto del 20% per i minorenni.
// 3) Va applicato uno sconto del 40% per gli over 65.
// 4) L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// CONSIDERIAMO DI PRENDERE KM IN DECIMALE
let km = parseFloat(prompt("Quanti Chilometri devi percorrere?")).toFixed(2);


// CONSIDERIAMO DI PRENDERE L'ETA' DELL'UTENTE
const userAge = parseInt(prompt("Quanti anni hai?"));


// Check
let isValid = true;
if(isNaN(parseFloat(km)) || isNaN(userAge)){
    isValid = false;
} 


// CONSIDERIAMO IL PREZZO E IL PREZZO SCONTATO COME VARIABILI GLOB
// COSI DA NON DICHIARARLI SEMPRE NEL BLOCCO 
let price = 0;
let discountedPrice = 0;


// SICCOME IL .TOFIXED RITORNA UNA STRINGA, A PRICE UTILIZZO DI NUOVO IL PARSEFLOAT SU KM PER AVERE IN RITORNO UN NUM
if(isValid){
    if (userAge < 18){
        price = 0.21 * parseFloat(km);
        discountedPrice = price - ((price * 20) / 100);
        alert("UTENTE MINORENNE - Il prezzo finale del biglietto è: " + discountedPrice.toFixed(2));
    }
    else if(userAge > 64){
        price = 0.21 * parseFloat(km);
        discountedPrice = price - ((price * 40) / 100);
        alert("UTENTE ANZIANO - Il prezzo finale del biglietto è: " + discountedPrice.toFixed(2));
    }
    else{
        price = 0.21 * parseFloat(km);
        alert("UTENTE ADULTO - Il prezzo finale del biglietto è: " + price.toFixed(2));
    }
}else (alert("Inserisci correttamente i dati"));