// prompt del nome
var name = prompt ("Qual è il tuo nome?");

console.log(name);

// prompt del cognome
var cognome = prompt ("E il tuo cognome?");

console.log(cognome);

// prompt colore preferito
var colore = prompt ("E qual è il tuo colore preferito?");

console.log(colore);

// stringa con password
var pwd = name + cognome + colore + "19";

// creazione stringa otput
document.getElementById('password').innerHTML = "Ciao, la tua insicurissima password è: " + pwd;
