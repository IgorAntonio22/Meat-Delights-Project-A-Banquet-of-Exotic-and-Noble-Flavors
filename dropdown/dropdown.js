const selectContainers = document.querySelectorAll('.container-select > div');

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
            }
        });

        select.classList.toggle('open');
        if (select.classList.contains('open')) {
            description.style.display = 'block';
            title.children[1].removeAttribute("src");
            title.children[1].setAttribute("src", "../svg/chevron-up-blue.svg");
            console.log(title.children[1])
            
        } else {
            description.style.display = 'none';
            title.children[1].setAttribute("src", "../svg/chevron-down.svg");
        }
    });
});

const radios2 = document.querySelectorAll(".radio-outline-drop");
radios2.forEach((elemento) => {
    elemento.addEventListener("click",() => {
        elemento.classList.toggle("active-drop");
    })
})