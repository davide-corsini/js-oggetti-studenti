//_#1 Creare un oggetto che descriva uno studente
//_con le seguenti proprietà: nome, cognome e età.
//_Stampare a schermo attraverso il for in tutte le
//_proprietà.
//.-#2 Creare un array di oggetti di studenti.Ciclare su
//.tutti gli studenti e stampare per ognuno nome e
//.cognome
//* #3--Dare la possibilità all’utente attraverso 3 prompt
//*di aggiungere un nuovo oggetto studente
//*inserendo nell’ordine: nome, cognome e età. 


//_Oggetto che descrive studente
var studente = {
    nome: 'Davide',
    cognome: 'Corsini',
    eta: '25'
}
//_Stampa proprietá
for (var key in studente){
    console.log(key + ': ' + studente[key]);
}
//.Array di oggetti di studenti
var studenti = [
    {
        nome: 'Davide',
        cognome: 'Corsini',
        eta: '25'
    },
    {
        nome: 'Emanuele',
        cognome: 'Cannone',
        eta: '40'
    },
    {
        nome: 'Cristiano',
        cognome: 'Tarconi',
        eta: '30'
    }
];

//.Stampo delle proprietá nome, cognome
for(i = 0; i<studenti.length; i++){
    console.log(studenti[i].nome);
    console.log(studenti[i].cognome);
}


//*Aggiungere in array studenti attraverso il prompt un nuovo oggetto
//* con le proprietá nome, cognome, eta
setTimeout(inserimentoDati, 3000);

function inserimentoDati(){
    var nuovaPersona;
    var chiedoNome = prompt('Inserisci nome');
    var chiedoCognome = prompt('Inseriscri cognome');
    var chiedoEta = parseInt(prompt('Quanti anni hai?'));

    nuovaPersona = {
        nome: chiedoNome,
        cognome: chiedoCognome,
        eta: chiedoEta
    }

    console.log(nuovaPersona);
    console.log(studenti);
    studenti.push(nuovaPersona);
    for (var key in nuovaPersona) {
        console.log(key + ': ' + nuovaPersona[key]);
    }
}