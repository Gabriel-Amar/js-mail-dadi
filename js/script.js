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