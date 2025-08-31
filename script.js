// Calculator Project



// DOM elements
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button-box button');

// Get all buttons (NodeList)
buttons.forEach(btn => {
    // Button actions
    btn.addEventListener('click', () => {
        // Raw button string
        const rawValue = btn.textContent;
        // Convert string to number
        const value = Number(rawValue);

        // If 0-9 pressed, replace 0 in display
        if (rawValue >= 0 && rawValue <= 9 && display.textContent === '0') {
            display.textContent = `${rawValue}`;
        } else {
            display.textContent += `${rawValue}`
        };
        // If '=' pressed, run operations
        if (rawValue === '=') display.textContent = `${operate()}`;
        // If 'C' pressed, clear display
        if (rawValue === 'C') display.textContent = '0';
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

