function minuscoleMaiuscole(a, b) {
    minA = a.toLowerCase();
    minB = b.toLowerCase();
    if (minA < minB){ return -1; }
    else if (minA > minB) { return 1;}
    else { return 0; }
}


// 1 chiedi all'utente il suo Cognome:
var cognome= prompt("inserisci il tuo Cognome");
console.log("Cognome:" + " " + cognome);
alert("Cognome:" + " " + cognome);

// 2 Inseriscilo in un array con altri cognomi:
var ListaCognomi= ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
ListaCognomi.push(cognome);
console.log(ListaCognomi);
alert("Lista aggiornata :" +  " " + ListaCognomi);

// 3 Stampa la lista ordinata in sequenza Alfabetica:
ListaCognomi.sort(minuscoleMaiuscole);
console.log(ListaCognomi);
alert("Lista in Ord. Alfabetico :" + " " + ListaCognomi);

//  4 Scrivi anche la posizione "umana" partendo da 1, 
//  della lista in cui il nuovo utente si trova
for (var i= 1; i< ListaCognomi.length; i++){
    console.log(cognome);
    document.write(ListaCognomi[i] + "<br>");
}

