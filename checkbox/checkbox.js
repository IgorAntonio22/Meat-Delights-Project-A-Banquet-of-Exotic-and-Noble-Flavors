const todasAsOpcoes = document.getElementById("todasAsOpcoes");
const checkboxes = document.querySelectorAll(".checkbox");
const checkboxDescriptions = document.querySelectorAll(".checkbox-description");

checkboxes.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        elemento.classList.toggle("selected");

        if(elemento.classList[1] === "selected") {
            elemento.children[0].setAttribute("style", "display:block;")
        } else {
            elemento.children[0].setAttribute("style", "display:none;")
        }

    })


})

todasAsOpcoes.onclick = function() {
    for(i = 1; i <= 2; i++) {
        if(todasAsOpcoes.classList[1] === "selected") { 
            checkboxes[i].classList.add("selected");
            checkboxes[i].children[0].setAttribute("style", "display:block;")
            todasAsOpcoes.children[0].setAttribute("src", "../svg/check2.svg")
        } else {
            checkboxes[i].classList.remove("selected");
            checkboxes[i].children[0].setAttribute("style", "display:none;")
        }
    }
}

console.log(checkboxes[2].classList[1])

checkboxes[1].onclick = function() {
    if(checkboxes[1].classList[1] === "selected" && checkboxes[2].classList[1] === undefined) {
        todasAsOpcoes.classList.add("selected");
        todasAsOpcoes.children[0].setAttribute("style", "display:block;")
        todasAsOpcoes.children[0].setAttribute("src", "../svg/dash.svg")
    } 

    if(checkboxes[1].classList[1] === "selected" && checkboxes[2].classList[1] === "selected") {
        todasAsOpcoes.classList.add("selected");
        todasAsOpcoes.children[0].setAttribute("style", "display:block;")
        todasAsOpcoes.children[0].setAttribute("src", "../svg/check2.svg")
   }

   if(checkboxes[1].classList[1] === undefined && checkboxes[2].classList[1] === "selected") {
        todasAsOpcoes.classList.add("selected");
        todasAsOpcoes.children[0].setAttribute("style", "display:block;")
        todasAsOpcoes.children[0].setAttribute("src", "../svg/dash.svg")
   }

   if(checkboxes[1].classList[1] === undefined && checkboxes[2].classList[1] === undefined) {
        todasAsOpcoes.classList.remove("selected");
        todasAsOpcoes.children[0].setAttribute("style", "display:none;")
}
    
}

checkboxes[2].onclick = function() {
   if(checkboxes[1].classList[1] === "selected" && checkboxes[2].classList[1] === "selected") {
        todasAsOpcoes.classList.add("selected");
        todasAsOpcoes.children[0].setAttribute("style", "display:block;")
        todasAsOpcoes.children[0].setAttribute("src", "../svg/check2.svg")
   }

   if(checkboxes[2].classList[1] === "selected" && checkboxes[1].classList[1] === undefined) {
        todasAsOpcoes.classList.add("selected");
        todasAsOpcoes.children[0].setAttribute("style", "display:block;")
        todasAsOpcoes.children[0].setAttribute("src", "../svg/dash.svg")
} 

    if(checkboxes[2].classList[1] === undefined && checkboxes[1].classList[1] === "selected") {
        todasAsOpcoes.classList.add("selected");
        todasAsOpcoes.children[0].setAttribute("style", "display:block;")
        todasAsOpcoes.children[0].setAttribute("src", "../svg/dash.svg")
}

    if(checkboxes[2].classList[1] === undefined && checkboxes[1].classList[1] === undefined) {
        todasAsOpcoes.classList.remove("selected");
        todasAsOpcoes.children[0].setAttribute("style", "display:none;")
}

}

