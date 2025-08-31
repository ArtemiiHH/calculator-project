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
        // Raw button string
        const rawValue = btn.textContent;
        // Convert string to number
        const value = Number(rawValue);

        // Clear button
        if (rawValue === 'C') {
            display.textContent = '0';
            num1 = '';
            num2 = '';
            operator = '';
            return;
        }

        // Number buttons
        if (!isNaN(rawValue) && value >= 0 && value <= 9 && display.textContent === '0') {
            display.textContent = `${rawValue}`;
        } else {
            display.textContent += `${rawValue}`
        }

        // Operator buttons
        if (rawValue === '+' || rawValue === '-' || rawValue === 'x' || rawValue === '/') {
            num1 = Number(display.textContent);
            operator = rawValue;
            display.textContent = `0`;
        }

        // Equals button
        if (rawValue === '=') {
            num2 = Number(display.textContent);
            display.textContent = `0`;
            display.textContent = operate(num1, num2, operator);
        };
    });
});

const operate = (num1, num2, operator) => {
    if (operator === '+') return add(num1, num2);
    if (operator === '-') return subtract(num1, num2);
    if (operator === 'x') return multiply(num1, num2);
    if (operator === '/') return divide(num1, num2);
};

// Operation functions
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

