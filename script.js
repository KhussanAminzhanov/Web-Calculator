let firstNumber = 0;
let operation = "";

const add = (a, b) => { return a + b; }
const subtract = (a, b) => { return a - b; }
const multiply = (a, b) => { return a * b; }
const divide = (a, b) => { return a / b; }

function operate(operator, numOne, numTwo) {
    let result;
    if (operator === "+") result = add(numOne, numTwo);
    if (operator === "-") result = subtract(numOne, numTwo);
    if (operator === "*") result = multiply(numOne, numTwo);
    if (operator === "/") result = divide(numOne, numTwo);
    return result;
}

const input = document.querySelector(".expression");
const keys = document.querySelectorAll(".digits");

keys.forEach(key => key.addEventListener("click", (e) => {
    input.value = input.value + e.target.textContent;
}))

const operations = document.querySelectorAll(".operation")

operations.forEach(operation => operation.addEventListener("click", operationOnClickTwo))

document.querySelector(".equal-key").addEventListener("click", () => {
    const value = Number(input.value);
    if (operation == "+") firstNumber = add(firstNumber, value);
    if (operation == "-") firstNumber = subtract(firstNumber, value);
    if (operation == "/") firstNumber = divide(firstNumber, value);
    if (operation == "*") firstNumber = multiply(firstNumber, value);
    input.value = "";
    input.setAttribute("placeholder", firstNumber);
    console.log(firstNumber)
    firstNumber = 0;
    operation = "";
})

document.querySelector(".clear-key").addEventListener("click", () => {
    input.value = "";
    input.setAttribute("placeholder", "0");
    firstNumber = 0;
    operation = "";
})

function parse(expression) {
    let operations = expression.split(/\d/g).filter(o => o !== "").map(o => o.trim());
    let digits = expression.split(/[+-/*]/g).map(d => d.trim())
    console.table(operations);
    console.table(digits);
}

function operationOnClickTwo(e) {
    if (operation == "") {
        operation = e.target.textContent;
        firstNumber = Number(input.value);
        input.value = "";
        input.setAttribute("placeholder", firstNumber);
    } else {
        const value = Number(input.value);
        if (operation == '+') firstNumber = add(firstNumber, value);
        if (operation == '-') firstNumber = subtract(firstNumber, value);
        if (operation == '*') firstNumber = divide(firstNumber, value);
        if (operation == '/') firstNumber = divide(firstNumber, value);
        operation = e.target.textContent;
        input.value = "";
        input.setAttribute("placeholder", firstNumber);
    }

}