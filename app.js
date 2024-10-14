// CHIEDERE ALL'UTENTE LA SUA ETA'
// CHIEDERE ALL'UTENTE QUANTI KM DEVE PERCORRERE
// IL PREZZO DEL BIGLIETTO E' DI 0.21 € AL KM, CALCOLARE 0.21 PER I KM DA PERCORRERE
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

//PREZZO DEL BIGLIETTO CON TARIFFA BASE

const baseRate = 0.21
console.log (baseRate)

const ticketPrice = baseRate * numberDistance
console.log (ticketPrice)

//SCONTO PER GIOVANI UNDER 18

const underEighteen = (ticketPrice * 20) / 100
console.log (underEighteen)

const underEighteenTicket = ticketPrice - underEighteen
console.log (underEighteenTicket)

let num = underEighteenTicket;
console.log (Math.round (num * 100) /100);

//SCONTO PER ANZIANI OVER 65

const overSixtyFive = (ticketPrice * 40) / 100
console.log (overSixtyFive)

const overSixtyFiveTicket = ticketPrice - overSixtyFive
console.log (overSixtyFiveTicket)

let number = overSixtyFiveTicket;
console.log (Math.round (number * 100) /100);