const selectContainers = document.querySelectorAll('.container-select > div');
const containerSelect = document.querySelector(".container-select")
selectContainers.forEach((container) => {
    const select = container.querySelector('.select');
    const title = container.querySelector('.title');
    const description = container.querySelector('.description');

    title.addEventListener('click', () => {
        selectContainers.forEach((otherContainer) => {
            const otherSelect = otherContainer.querySelector('.select');
            const otherDescription = otherContainer.querySelector('.description'); 
            if (otherContainer !== container) {
                otherSelect.classList.remove('open');
                otherDescription.style.display = 'none';
                otherSelect.children[0].children[1].removeAttribute("src");
                otherSelect.children[0].children[1].setAttribute("src", "../svg/chevron-down.svg");
                otherSelect.children[0].classList.remove("onfocus");
            }
        });

        select.classList.toggle('open');
        if (select.classList.contains('open')) {
            description.style.display = 'block';
            title.children[1].removeAttribute("src");
            title.children[1].setAttribute("src", "../svg/chevron-up-blue.svg");
            title.classList.add("onfocus")
            console.log(title.children[1])
            
        } else {
            description.style.display = 'none';
            title.children[1].setAttribute("src", "../svg/chevron-down.svg");
            title.classList.remove("onfocus")
        }
    });
});

const radios2 = document.querySelectorAll(".radio-outline-drop");

radios2.forEach((elemento) => {
    elemento.addEventListener("click",() => {
        elemento.classList.toggle("active-drop");

        if(elemento.classList[1] === "active-drop") {
            removerErro(containerSelect);
        } else {
            removerErro(containerSelect)
            exibirErro(containerSelect, "Selecione pelo menos um tipo de carne");            
        }

        rastrear2()
    })

    function rastrear2() { 
            
        if(radios2[0].classList[1] === "active-drop" || radios2[1].classList[1] === "active-drop" || radios2[2].classList[1] === "active-drop" || radios2[3].classList[1] === "active-drop" || radios2[4].classList[1] === "active-drop" || radios2[5].classList[1] === "active-drop" || radios2[6].classList[1] === "active-drop" || radios2[7].classList[1] === "active-drop" || radios2[8].classList[1] === "active-drop" || radios2[9].classList[1] === "active-drop") {
            removerErro(containerSelect);
        }
        
    }
})
