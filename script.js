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

        if (value === '=') operate();
        if (value === 'C') display.style = '';
    });
});

const operate = (num1, num2, operator) => {
    if (operator === '+') add(num1, num2);
    if (operator === '-') subtract(num1, num2);
    if (operator === 'x') multiply(num1, num2);
    if (operator === '/') divide(num1, num2);
};

// Operation functions
const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

