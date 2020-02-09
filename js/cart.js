let buttons = document.querySelectorAll(".cart__title--item");
for(let i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener('click' , (e) => {

        let target = e.target.parentNode.getAttribute("data-target");
        let wizardStep = document.querySelector(target);
        let wizardStepActive = document.querySelector(".content.active");
        console.log(wizardStepActive);
        wizardStepActive.classList.remove("active");

        wizardStep.classList.add("active");
    })

}