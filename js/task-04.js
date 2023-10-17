
const incrButton = document.querySelector('button[data-action="increment"]'); 

const decrButton = document.querySelector('button[data-action="decrement"]');

const spanNumber = document.querySelector('#value');
 let counterValue = 0;

const incrClick = () => {
    counterValue += 1;
    spanNumber.textContent = counterValue;
};

const decrClick = () => {
    counterValue -= 1;
    spanNumber.textContent = counterValue;
};

incrButton.addEventListener('click', incrClick);

decrButton.addEventListener('click', decrClick);