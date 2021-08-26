function minuscoleMaiuscole(a, b) {
    minA = a.toLowerCase();
    minB = b.toLowerCase();
    if (minA < minB) {
        {return -1;}
    }
    else if (minA > minB) {
        {return 1;}
    }
    else 
        {return 0;} 
}


// 1 chiedi all'utente il suo Cognome:
var cognome= prompt("inserisci il tuo Cognome");
console.log("Cognome:" + " " + cognome);
alert("Cognome:" + " " + cognome);

// 2 Inseriscilo in un array con altri cognomi:
var listaCognomi= ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
listaCognomi.push(cognome);
console.log(listaCognomi);
alert("Lista aggiornata :" +  " " + listaCognomi);

// 3 Stampa la lista ordinata in sequenza Alfabetica:
listaCognomi.sort(minuscoleMaiuscole);
console.log(listaCognomi);
alert("Lista in Ord. Alfabetico :" + " " + listaCognomi);

//  4 Scrivi anche la posizione "umana" partendo da 1, 
//  della lista in cui il nuovo utente si trova
for (var i= 1; i< listaCognomi.length; i++){
    if(listaCognomi[i] == cognome){
    console.log("la posizione di"+ " " + cognome + " " + "è:" + " " + [i]);
    }
} 

// document.write(listaCognomi[i] + "<br>");