// Calculator Project



// DOM elements
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button-box button');

// Get all buttons (NodeList)
buttons.forEach(btn => {
    // Button actions
    btn.addEventListener('click', () => {
        let num1 = '';
        let num2 = '';
        let operator = '';
        
        // Raw button string
        const rawValue = btn.textContent;
        // Convert string to number
        const value = Number(rawValue);

        // If 0-9 pressed, replace 0 in display
        if (!isNaN(rawValue) && value >= 0 && value <= 9 && display.textContent === '0') {
            display.textContent = `${rawValue}`;
        } else {
            display.textContent += `${value}`
        };
        // If operator pressed...
        if (rawValue === '+' || rawValue === '-' || rawValue === 'x' || rawValue === '/') {
            num1 = Number(display.textContent);
            operator = rawValue;
            display.textContent = `0`;
        };
        // If '=' pressed, run operations
        if (rawValue === '=') {
            num2 = Number(display.textContent);
            display.textContent = `0`;
            display.textContent = `${operate(num1, num2, operator)}`;
        };
        // If 'C' pressed, clear display
        if (rawValue === 'C') {
            display.textContent = '0';
            num1 = '';
            num2 = '';
            operator = '';
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

