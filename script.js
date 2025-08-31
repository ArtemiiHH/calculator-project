// Calculator Project



// DOM elements
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button-box button');

let num1 = '';
let num2 = '';
let operator = '';

// Get all buttons (NodeList)
buttons.forEach(btn => {
    // Button actions
    btn.addEventListener('click', () => {
        const rawValue = btn.textContent;
        const value = Number(rawValue);
        
        if (value >= 0 && value <= 9) display.textContent = `${value}`;

        if (rawValue === '=') display.textContent = `${operate()}`;
        if (rawValue === 'C') display.textContent = '0';
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

