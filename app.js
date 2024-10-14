// CHIEDERE ALL'UTENTE LA SUA ETA'
// CHIEDERE ALL'UTENTE QUANTI KM DEVE PERCORRERE
// IL PREZZO DEL BIGLIETTO E' DI 0.21 € AL KM
// SE MINORENNE HA DIRITTO AL -20% DI SCONTO
// ALTRIMENTI SE OVER 65 HA DIRITTO AL -40% DI SCONTO
// ALTRIMENTI NON AVRA' DIRITTO AD ALCUNA SCONTISTICA



//ALERT ('CIAO UTENTE')

const userAge = prompt ('Inserisci la tua età')
const distance = prompt ('Inserisci i chilometri da percorrere')

//VISUALIZZAZIONI IN NUMERI INTERI E NON STRINGHE
const numberUserAge = parseInt (userAge)
console.log (numberUserAge)

const numberDistance = parseInt (distance)
console.log (numberDistance)