let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1; 
document.getElementById("num2-el").textContent = num2; 

let sumEl = document.getElementById("sum-el");

function incrementL() {
    num1 += 1
    document.getElementById("num1-el").textContent = num1
    num1-el.textContent
}

function reduceL() {
    num1 -= 1
    document.getElementById("num1-el").textContent = num1
    num1-el.textContent
}

function incrementR() {
    num2 += 1
    document.getElementById("num2-el").textContent = num2
    num2-el.textContent
} 
function reduceR() {
    num2 -= 1
    document.getElementById("num2-el").textContent = num2
    num2-el.textContent
}

function add() {
    let total = num1 + num2;
    sumEl.textContent = "Sum: " + total;
}

function subtract() {
    let total = num1 - num2;
    sumEl.textContent = "Sum: " + total;
}

function divide() {
    let total = num1 / num2;
    sumEl.textContent = "Sum: " + total;
}
function multiply() {
    let total = num1 * num2;
    sumEl.textContent = "Sum: " + total;
}