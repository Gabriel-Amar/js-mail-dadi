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

//console.log(validEmail[1])