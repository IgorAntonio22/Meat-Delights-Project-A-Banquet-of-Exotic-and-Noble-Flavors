let error = document.getElementById("error");
let nome = document.getElementById("inputNome");
let email = document.getElementById("inputEmail");
let telefone = document.getElementById("inputTelefone");
let preferencias = document.querySelectorAll(".radio-outline");
let carne = document.querySelectorAll(".radio-outline-drop");
let mensagem = document.getElementById("inputMensagem");
let containerRadio = document.querySelector(".radio-full-container")


let arg1 = false;
let arg2 = false;
let arg3 = false;
let arg4 = false;
let arg5 = false;
let arg6 = false;
/* document.querySelector("#formulario").addEventListener("submit", function(evento) { */



    /* if (nome.value.trim() === "" || nome.value.split(" ").length < 2) {
        if(!error) { 
            error = document.createElement("p");
            error.id = "error";
            error.style.marginBottom = "2rem";
            error.style.padding = "0px";
            error.style.color = "red";
            nome.insertAdjacentElement('afterend', error);
        }

        error.innerText = "Nome não pode estar em branco e deve possuir pelo menos 2 nomes."
        evento.preventDefault();
        return false;

    } else if (error) {

        error.remove();

    } */


    /* if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        console.log("abobrinha")
        if(!errorEmail) { 
            errorEmail = document.createElement("p");
            errorEmail.id = "errorEmail";
            errorEmail.style.marginBottom = "2rem";
            errorEmail.style.padding = "0px";
            errorEmail.style.color = "red";
            email.insertAdjacentElement('afterend', errorEmail)
        }

        errorEmail.innerText = "E-mail inválido";
        evento.preventDefault();
        return false;

    } else if (errorEmail) {

        errorEmail.remove();

    }

    telefone.value = telefone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (telefone.value.length !== 11) {
        if(!errorTelefone) { 
            errorTelefone = document.createElement("p");
            errorTelefone.id = "errorTelefone";
            errorTelefone.style.marginBottom = "2rem";
            errorTelefone.style.padding = "0px";
            errorTelefone.style.color = "red";
            telefone.insertAdjacentElement('afterend', errorTelefone)
        }

        errorTelefone.innerText = "Telefone inválido";
        evento.preventDefault();
        return false;

    } else if (errorTelefone) {

        errorTelefone.remove();

    }
    
    let preferenciaSelecionada = false;
    for (let i = 0; i < preferencias.length; i++) {
        if (preferencias[i].classList[1] === "active-radio") {
            preferenciaSelecionada = true;
            break;
        }
    }

    if (!preferenciaSelecionada) {
        if(!errorPreferencias) {
            errorPreferencias = document.createElement("p");
            errorPreferencias.id = "errorPreferencias";
            errorPreferencias.style.marginBottom = "2rem";
            errorPreferencias.style.padding = "0px";
            errorPreferencias.style.color = "red";
            let radioFullContainer = document.querySelector(".radio-full-container");
            radioFullContainer.insertAdjacentElement('afterend', errorPreferencias);
        }

        errorPreferencias.innerText = "Selecione pelo menos uma preferência";
        evento.preventDefault();
        return false;

    } else if (errorPreferencias) {

        errorPreferencias.remove();

    }


    let carneSelecionada = false;
    for (let i = 0; i < carne.length; i++) {
        if (carne[i].classList[1] === "active-drop") {
            carneSelecionada = true;
            break;
        }
    }

    if (!carneSelecionada) {
        if(!errorCarne) { 
            errorCarne = document.createElement("p");
            errorCarne.id = "errorCarne";
            errorCarne.style.marginBottom = "2rem";
            errorCarne.style.padding = "0px";
            errorCarne.style.color = "red";
            let selectContainer = document.querySelector(".container-select");
            selectContainer.insertAdjacentElement('afterend', errorCarne);
        }

        errorCarne.innerText = "Selecione pelo menos uma carne"
        evento.preventDefault();
        return false;

    } else if (errorCarne) {

        errorCarne.remove();

    }

    if (mensagem.value.length < 5) {
        if(!errorMensagem) { 
            errorMensagem = document.createElement("p");
            errorMensagem.id = "errorMensagem";
            errorMensagem.style.marginBottom = "2rem";
            errorMensagem.style.padding = "0px";
            errorMensagem.style.color = "red";
            mensagem.insertAdjacentElement('afterend', errorMensagem);
        }

        errorMensagem.innerText = "Digite pelo menos 5 caracteres";
        evento.preventDefault();
        return false;

    } else if(errorMensagem) {

        errorMensagem.remove()
    }
 */
    
/* }) */

function notSubmitFormulario(eventoSubmit) {
    let formulario = document.querySelector("#formulario")
    eventoSubmit = true;
    formulario.addEventListener("submit", function(submit) {
        if(eventoSubmit === true) {
            submit.preventDefault();
        } else if ((arg1  === true && arg2  === true && arg3  === true && arg4  === true && arg5  === true && arg6  === true)) {
            formulario.submit();
        }
      })
}

    

function exibirErro(elemento, mensagem) {
    let error = document.createElement("p");
    error.className = "error";
    error.style.color = "red";
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
nome.addEventListener("keyup", (keyup) => {
    if(keyup.target.value ==! nome.value.trim() === "" || nome.value.split(" ").length < 2) {
        removerErro(nome);
        exibirErro(nome, "Exemplo válido: João Felipe");
        arg1 = false;
    } else {
        removerErro(nome);
        arg1 = true;
    }
})

nome.addEventListener("click", () => {
    if(nome.value === "") {
        removerErro(nome);
        exibirErro(nome, "Digite pelo menos 2 nomes");
        
    }
})

nome.addEventListener("focusout", () => {
    if(nome.value ==! nome.value.trim() === "" || nome.value.split(" ").length < 2) {
        removerErro(nome);
        exibirErro(nome, "Digite pelo menos 2 nomes");
        
    }
})

//email
email.addEventListener("keyup", (keyup) => { 
    if (!keyup.target.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        removerErro(email);
        exibirErro(email, "Exemplos válidos: email@al.infnet.edu.br ou email@gmail.com");
        arg1 = false;
    } else {
        removerErro(email);
        arg2 = true;
    }
}) 

email.addEventListener("click", () => {
    if(email.value === "") {
        removerErro(email);
        exibirErro(email, "Digite um e-mail");
        
    }
})

email.addEventListener("focusout", () => {
    if(!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        removerErro(email);
        exibirErro(email, "Digite um e-mail válido:");
        
    }
})

//telefone
telefone.addEventListener("keyup", (keyup) => { 
    telefone.value = telefone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (keyup.target.value.length !== 11) {
        removerErro(telefone);
        exibirErro(telefone, "Exemplo válido: 21998745861");
        arg1 = false;
    } else {
        removerErro(telefone);
        arg3 = true;
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
        removerErro(telefone);
        exibirErro(telefone, "Digite um telefone válido");
        
})

//preferencias radio
preferencias.forEach((elemento) => {
    elemento.addEventListener("mousedown", (evento) => {
        elemento.classList.toggle("active-radio")
        console.log(evento.toElement.className);

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
            arg4 = true;   
        } 
    }
})

arg5 = true;
arg6 = true;

