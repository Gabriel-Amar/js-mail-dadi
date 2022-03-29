let bottone = document.getElementById("calcola")
let mail = document.getElementById("mail")
let risultato = document.getElementById("risultato")

bottone.addEventListener("click", function(){
    risultato.classList.remove("d-none")
    let validEmail = ["prova0@gmail.com", "prova1@gmail.com", "prova2@gmail.com"];
    let emailValida = false;

    for(let i = 0; i < validEmail.length; i++){
        if(validEmail[i] === mail.value){
            emailValida = true;
        }
    }
    if(emailValida){
        risultato.innerHTML = "Accesso eseguito";
        
    } else {
        risultato.innerHTML = "Accesso negato. Usa e-mail valida";
    }
})




let bottone2 = document.getElementById("genera")
let generato1 = document.getElementById("numero1")
let generato2 = document.getElementById("numero2")
let risultato2 = document.getElementById("risultato2")
let giocatore1 = document.getElementById("giocatore1")
let giocatore2 = document.getElementById("giocatore2")


bottone2.addEventListener("click", function(){
    generato1.classList.remove("d-none");

    generato2.classList.remove("d-none");

    risultato2.classList.remove("d-none");

    giocatore1.classList.remove("d-none");

    giocatore2.classList.remove("d-none");

    let numero1 = Math.floor(Math.random() * 6);
    
    let numero2 = Math.floor(Math.random() * 6);
    
    if(numero1 > numero2){
        risultato2.innerHTML = ("Ha vinto l'essere umano")
        generato1.innerHTML = numero1
        generato2.innerHTML = numero2

    } 
    else if (numero1 < numero2){
        risultato2.innerHTML = ("Ha vinto il computer")
        generato1.innerHTML = numero1
        generato2.innerHTML = numero2
    } 
    else{
        ("Pareggio")
    }


})