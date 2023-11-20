let error = document.getElementById("error");
let nome = document.getElementById("inputNome");
let email = document.getElementById("inputEmail");
let telefone = document.getElementById("inputTelefone");
let preferencias = document.querySelectorAll(".radio-outline");
let carne = document.querySelectorAll(".radio-outline-drop");
let mensagem = document.getElementById("inputMensagem");
let containerRadio = document.querySelector(".radio-full-container")
let formulario = document.querySelector("#formulario");
let preencherFormButton = document.querySelector(".preencherForm");

preencherFormButton.onclick = function() {
    if(preencherFormButton.innerText === "Preencher Formulário") { 
        formulario.classList.toggle("display-none");
        preencherFormButton.innerText = "Cancelar Preenchimento"
    } else if (preencherFormButton.innerText === "Cancelar Preenchimento") {
        formulario.classList.toggle("display-none");
        preencherFormButton.innerText = "Preencher Formulário"
    }
}

    

function exibirErro(elemento, mensagem) {
    let error = document.createElement("p");
    error.className = "error";
    error.style.color = "white";
    error.style.marginBottom = "2rem";
    error.style.padding = "0px";
    error.innerText = mensagem;
    elemento.insertAdjacentElement('afterend', error);
}

function removerErro(elemento) {
    let error = elemento.nextElementSibling.classList[0] === "error";
    if (error) {
        elemento.nextElementSibling.remove()
    }
}

//nome
exibirErro(nome, "Digite pelo menos 2 nomes");
nome.addEventListener("keyup", (keyup) => {
    if(keyup.target.value ==! nome.value.trim() === "" || nome.value.split(" ").length < 2) {
        removerErro(nome);
        exibirErro(nome, "Exemplo válido: João Felipe");
    } else {
        removerErro(nome);
        
    }
})


nome.addEventListener("focusout", () => {
    if(nome.value ==! nome.value.trim() === "" || nome.value.split(" ").length < 2) {
        removerErro(nome);
        exibirErro(nome, "Digite pelo menos 2 nomes");
        
    }
})

//email
exibirErro(email, "Digite um e-mail válido");
email.addEventListener("keyup", (keyup) => { 
    if (!keyup.target.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        removerErro(email);
        exibirErro(email, "Exemplos válidos: email@al.infnet.edu.br ou email@gmail.com");
    } else {
        removerErro(email);
        
    }
}) 


email.addEventListener("focusout", () => {
    if(!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        removerErro(email);
        exibirErro(email, "Digite um e-mail válido");
        
    }
})

//telefone
exibirErro(telefone, "Digite um telefone válido");
telefone.addEventListener("keyup", (keyup) => { 
    telefone.value = telefone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (keyup.target.value.length !== 11) {
        removerErro(telefone);
        exibirErro(telefone, "Exemplo válido: 21998745861");
    } else {
        removerErro(telefone);
        
    }
})

telefone.addEventListener("click", () => {
    if (telefone.value.length !== 11) {
        removerErro(telefone);
        exibirErro(telefone, "Digite um telefone válido");
    } else {
        removerErro(telefone);
    }
})

telefone.addEventListener("focusout", () => {
    if(telefone.value.length !== 11) { 
        removerErro(telefone);
        exibirErro(telefone, "Digite um telefone válido");
    }   
})

//preferencias radio
preferencias.forEach((elemento) => {
    elemento.addEventListener("mousedown", (evento) => {

        elemento.classList.toggle("active-radio")

        if(elemento.classList[1] === "active-radio") {
            removerErro(containerRadio);
        } else {
            removerErro(containerRadio)
            exibirErro(containerRadio, "Selecione pelo menos uma preferência");            
        }

        rastrear()

    })

    function rastrear() { 
        if(preferencias[0].classList[1] === "active-radio" || preferencias[1].classList[1] === "active-radio" || preferencias[2].classList[1] === "active-radio") {

            removerErro(containerRadio)
            
        } 
    }
})

exibirErro(containerRadio, "Selecione pelo menos uma preferência");

//carne - dropdown.js

exibirErro(containerSelect, "Selecione pelo menos um tipo de carne");

//mensagem

exibirErro(mensagem, "Digite no mínimo 5 caracteres");

mensagem.addEventListener("keyup", () => {
    if(mensagem.value.length <= 5) {
        removerErro(mensagem);
        exibirErro(mensagem, "Digite no mínimo 5 caracteres");
    } else {
        removerErro(mensagem);
    }
})

function notSubmitFormulario() {
    formulario.addEventListener("submit", function(submit) {  

        let getError = document.querySelector(".error");

        if(getError.classList[0] === "error") {       
            submit.preventDefault();
        } else {
            formulario.submit()
        } 
    })
}

notSubmitFormulario()