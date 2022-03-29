let email = prompt ("inserisci la tua email");

let validEmail = ["prova0@gmail.com", "prova1@gmail.com", "prova2@gmail.com"];


let emailValida = false;

for(let i = 0; i < validEmail.length; i++){
    if(validEmail[i] === email){
        emailValida = true;
    }
}
if(emailValida){
    console.log("Accesso eseguito")
} else {
    console.log("Accesso negato")
}



let numeroUno = Math.floor(Math.random() * 6);
let numeroDue = Math.floor(Math.random() * 6);

console.log(numeroUno)
console.log(numeroDue)

if(numeroUno > numeroDue){
    console.log("Ha vinto l'essere umano")
} else if (numeroUno < numeroDue){
    console.log("Ha vinto il computer")
} else{
    console.log("Pareggio")
}