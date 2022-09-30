const form = document.getElementById("form");

const inputNome = document.getElementById("nome");
const spanNome = document.getElementById("spanNome");
const divNome = document.getElementById("div-nome");

const cep = document.getElementById("cep");
const divCep  = document.getElementById("div-cep")

const inputSenha = document.getElementById("password");
const spanSenha = document.getElementById("spanSenha");
const divSenha = document.getElementById("divSenha");

const inputEmail = document.getElementById("email");
const divEmail = document.getElementById("divEmail")
const spanEmail = document.getElementById("spanEmail")

const inputConfirmEmail = document.getElementById("confirmEmail")
const divConfEmail = document.getElementById("confEmail")
const confEmail = document.querySelector(".confEmail");

const inputaniversaro = document.getElementById("dataNascimento");
const divAniversario = document.getElementById("aniversario");

const inputs = document.querySelector(".inputs");

let validNome  
let validEmail  
let validConfEmail  
let validCep  
let validAniversario  
let validSenha  

inputaniversaro.addEventListener("submit", (event)=> {
    if(inputaniversaro.value == "") {
        event.preventDefault();
    }
})

inputNome.addEventListener("input", (event) => {
    if(inputNome.value === '') {
        divNome.style.borderColor = "red"
        validNome = false;
    } else {
        divNome.style.borderColor = "#06c706";
        validNome = true;
        
    }
})

function validarEmail(email) {
    let emailValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+([a-z]+)?$/i;
    return emailValid.test(email)
}

inputEmail.addEventListener("input", () => {
    if(validarEmail(inputEmail.value) !== true) {
        divEmail.style.borderColor = "red"
        spanEmail.innerHTML = "ex:email@me.com"
        spanEmail.style.color = "red"
        validEmail = false;
    }else {
        divEmail.style.borderColor = "#06c706"
        spanEmail.innerHTML = "Good"
        spanEmail.style.color = ""
        validEmail = true;
        
    }
})

cep.addEventListener("blur", (event)=> {
    const eventcep = event.target.value
    if(eventcep.length < 5) {
        divCep.style.borderColor = "red"
        validCep = false;
    }else {
        divCep.style.borderColor = "green"
        validCep = true;
    } 
    
})


inputConfirmEmail.addEventListener("input", (event) => {
    if(inputEmail.value != inputConfirmEmail.value) {
        spanConfEmail.style.display = "block"
        confEmail.style.borderColor = "red"
        validConfEmail = false;
    }else {
        spanConfEmail.style.display = "none"
        confEmail.style.borderColor = "#06c706"
        validConfEmail = true;
    }
})

 // deve conter ao menos um dígito
 // deve conter ao menos uma letra minúscula
 // deve conter ao menos uma letra maiúscula
 // deve conter ao menos um caractere especial
 // deve conter ao menos 12 dos caracteres mencionados


function validarSenha(senha) {
    let forcaSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{12,}$/;
    return forcaSenha.test(senha);
}

inputSenha.addEventListener("input",() => {
    if(validarSenha(inputSenha.value) != true) {
        divSenha.style.borderColor = "red";
        spanSenha.innerHTML = "weak"
        spanSenha.style.color = "red"
        spanSenha.style.display = "block"
        validSenha = false;
    } else {
        divSenha.style.borderColor = "green";
        spanSenha.innerHTML = "good"
        spanSenha.style.color = "green"
        validSenha = true;
        
    }
})

form.addEventListener("submit", (event) => {
    if(validNome == false || validEmail == false || validConfEmail == false || validCep == false || validAniversario  == false || validSenha == false) {
        
        event.preventDefault();
    }
})
