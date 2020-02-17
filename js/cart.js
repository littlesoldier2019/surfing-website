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

const inputs = document.querySelectorAll('.table__input');
let totalNumbers = document.querySelectorAll('.total__numbers');
let itemValue = document.querySelector('.table__price--number').textContent;
let inputValue = document.querySelector('.table__input').value;
inputs.forEach((input) => {
    if(inputValue < 0 ) {
        alert('Enter a positive number');
    } else {
        input.addEventListener('input', () => {
            let sum = parseInt(itemValue) * inputValue;
            totalNumbers.forEach((item) => {
                item.textContent = sum;
            })


        });
    }



});
