let greeting = "Hello";
const name1 = "John";
let age = 25;

function sayHello(greeting, name) {
  console.log(greeting + ", " + name + "!");
}

function getBirthYear() {
  const currentYear = new Date().getFullYear();
  return currentYear - age;
}

function multiply(a, b) {
  return a * b;
}

// ===================

let num1 = 5;
let num2 = 10;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function calculate(a, b) {
  const sum = add(a, b);
  const result = multiply(sum, num1);
  return divide(result, num2);
}

// ===================
  
  function calculateArea(rectangle) {
    return rectangle.width * rectangle.height;
  }
  
  function calculatePerimeter(rectangle) {
    return 2 * (rectangle.width + rectangle.height);
  }
  
  function createRectangle(width, height) {
    return { width, height };
  }
  
  const rectangle= createRectangle(5, 10);
  const area = calculateArea(rectangle);
  const perimeter = calculatePerimeter(rectangle);
  