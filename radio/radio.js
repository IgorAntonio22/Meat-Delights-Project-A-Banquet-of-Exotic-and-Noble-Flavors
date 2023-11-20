const radios = document.querySelectorAll(".radio-container");
console.log(radios);
radios.forEach((elemento) => {
    elemento.addEventListener("click",() => {
        elemento.children[1].children[0].classList.toggle("active-radio");
    })
})
