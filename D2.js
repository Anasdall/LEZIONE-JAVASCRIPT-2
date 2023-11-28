/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const x = 10;
const y = 5;

if (x > y) {
  console.log("IL NUMERO PIU GRANDE E " + x);
} else if (y > x) {
  console.log("IL NUMERO PIU GRANDE E" + y);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num = 10;
if (num !== 5) {
  console.log("Not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num4 = 45;
if (num4 % 5 === 0) {
  console.log("è divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*const numx = 7
const numy = 1

if(numx === 8 || ) // da finire*/
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShippingCart = 60;
const ship = 10;
let totDaPagare = 0;

if (totalShippingCart > 50) {
  TotDapagare = totalShippingCart;
  console.log("Spedizione gratuita perchè hai raggiunto" + TotDapagare);
} else {
  TotDapagare = ship + totalShippingCart;
  console.log(
    totDaPagare +
      "non hau raggiungo la soglia minima per la spedizione gratuita"
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShippingCart2 = 60;
let calcolo = (totalShippingCart2 * 20) / 100;

const ship2 = 10;
let totDaPagare2 = 0;

if (totalShippingCart2 > 50) {
  TotDapagare2 = totalShippingCart2;
  console.log("Spedizione gratuita perchè hai raggiunto" + TotDapagare2);
} else {
  TotDapagare2 = ship + totalShippingCart2;
  console.log(
    totDaPagare2 +
      "non hau raggiungo la soglia minima per la spedizione gratuita"
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const Num1 = 3;
const Num2 = 5;
const Num3 = 8;
if (Num1 >= num2 && Num1 >= Num3) {
  if (Num2 >= Num3) {
    console.log(Num1, Num2, Num3);
  } else {
    console.log(Num1, Num3, Num2);
  }
} else if (Num2 >= Num1 && Num2 >= Num3) {
  if (Num1 >= Num3) {
    console.log(Num2, Num1, Num3);
  } else {
    console.log(Num2, Num3, Num1);
  }
} else if (Num3 >= Num1 && Num3 >= Num2) {
  if (Num1 >= Num2) {
    console.log(Num3, Num1, Num2);
  } else {
    console.log(Num3, Num2, Num1);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const z = 5;

if (typeof z === "number") {
  console.log(" Z è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const n = 10;
if (n % 2 === 0) {
  console.log("pari");
} else {
  console.log("dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore=");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = " Toronto";

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName +
  /* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

  /* SCRIVI QUI LA TUA RISPOSTA */
  me.skills.pop();

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = [];
array.splice(0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array.splice(9, 1, 200);
