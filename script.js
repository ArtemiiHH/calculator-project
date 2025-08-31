// Calculator Project



// DOM elements
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button-box button');

let num1 = '';
let num2 = '';
let operator = '';
let resetDisplay = false;

// Get all buttons (NodeList)
buttons.forEach(btn => {
    // Button actions
    btn.addEventListener('click', () => {
        const value = btn.textContent;


    });
});

const operate = (num1, num2, operator) => {
    if () {};
};

// Operation functions
const add = () => {
    return num1 + num2;
};

const subtract = () => {
    return num1 - num2;
};

const multiply = () => {
    return num1 * num2;
};

const divide = () => {
    return num1 / num2;
};

