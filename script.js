// Calculator Project



// DOM elements
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button-box button');

const num1 = 0;
const num2 = 0;
const operator = '';

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

// Get all buttons (NodeList)
buttons.forEach(btn => {
    // Button actions
    btn.addEventListener('click', () => {
        const value = btn.textContent;
        

    });
});