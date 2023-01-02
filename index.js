const buttonPlusArr = [
    '#qaP1',
    '#qaP2',
    '#qaP3'
];

const buttonMinusArr = [
    '#qaM1',
    '#qaM2',
    '#qaM3'
];

function addEventPlus (array) {
    for (el of array) {
        const buttonEl = document.querySelector(el);
        const minusEl = document.querySelector(el.replace('P', 'M'));
        const parentEl = buttonEl.parentElement.parentElement;
        buttonEl.addEventListener('click', () => {
            buttonEl.classList.toggle('icon-hidden');
            parentEl.style.height = 'auto';
            minusEl.classList.toggle('icon-hidden');
        });
    }
}

function addEventMinus (array) {
    for (el of array) {
        const buttonEl = document.querySelector(el);
        const plusEl = document.querySelector(el.replace('M', 'P'));
        const parentEl = buttonEl.parentElement.parentElement;
        buttonEl.addEventListener('click', () => {
            buttonEl.classList.toggle('icon-hidden');
            parentEl.style.height = '90px';
            plusEl.classList.toggle('icon-hidden');
        });
    }
}

addEventPlus(buttonPlusArr);
addEventMinus(buttonMinusArr);