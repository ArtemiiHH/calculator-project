// Calculator Project



// DOM elements
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button-box button');

// Get all buttons (NodeList)
buttons.forEach(btn => {
    // Button actions
    btn.addEventListener('click', () => {
        const rawValue = btn.textContent;
        const value = Number(rawValue);

        if (rawValue >= 0 && rawValue <= 9 && display.textContent === '0') {
            display.textContent = `${rawValue}`;
        } else {
            display.textContent += `${rawValue}`
        };
        if (rawValue === '=') display.textContent = `${operate()}`;
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

