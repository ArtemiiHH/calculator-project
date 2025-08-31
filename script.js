// Calculator Project



// DOM elements
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button-box button');

let num1 = '';
let num2 = '';
let operator = '';
let currentInput = '0';

// Get all buttons (NodeList)
buttons.forEach(btn => {
    // Button actions
    btn.addEventListener('click', () => {
        // Raw button string
        const rawValue = btn.textContent;

        // Clear button
        if (rawValue === 'C') {
            display.textContent = '0';
            num1 = '';
            num2 = '';
            operator = '';
            currentInput = '0';
            return;
        }

        // Number buttons
        if (!isNaN(rawValue) || rawValue === '.') {
            // Return if dot is pressed more than once
            if (rawValue === '.' && currentInput.includes('.')) {
                return;
            }
            if (currentInput === '0' && rawValue !== '.') {
                currentInput = rawValue;
            } else {
                currentInput += rawValue;
            }
            display.textContent = currentInput;
        }

        // Operator buttons
        if (rawValue === '+' || rawValue === '-' || rawValue === 'x' || rawValue === '/') {
            if (num1 === '') {
                num1 = Number(currentInput);
            } else if (operator) {
                num2 = Number(currentInput);
                num1 = operate(num1, num2, operator);
                display.textContent = num1;
            }
            operator = rawValue;
            currentInput = '0';
        }

        // Equals button
        if (rawValue === '=') {
            if (operator && num1 !== '') {
                num2 = Number(currentInput);
                const result = operate(num1, num2, operator);
                display.textContent = result;
                num1 = result;
                currentInput = result.toString();
                operator = '';
                num2 = '';
            }
        }
    });
});

const operate = (num1, num2, operator) => {
    if (operator === '+') return add(num1, num2);
    if (operator === '-') return subtract(num1, num2);
    if (operator === 'x') return multiply(num1, num2);
    if (operator === '/') {
        if (num2 === 0) return 'Error'; 
        return divide(num1, num2);
    };
};

// Operation functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;