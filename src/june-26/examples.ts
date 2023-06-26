let greeting: string = "Hello";
const name1: string = "John";
let age: number = 25;

function sayHello(greeting: string, name: string): void {
  console.log(greeting + ", " + name + "!");
}

function getBirthYear(): number {
  const currentYear = new Date().getFullYear();
  return currentYear - age;
}

function multiply(a: number, b: number): number {
  return a * b;
}

// ===================

let num1: number = 5;
let num2: number = 10;

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

function calculate(a: number, b: number): number {
  const sum: number = add(a, b);
  const result: number = multiply(sum, num1);
  return divide(result, num2);
}

// ===================



function calculateArea(rectangle: Rectangle): number {
  return rectangle.width * rectangle.height;
}

function calculatePerimeter(rectangle: Rectangle): number {
  return 2 * (rectangle.width + rectangle.height);
}

function createRectangle(width: number, height: number): Rectangle {
  return { width, height };
}

const rectangle: Rectangle= createRectangle(5, 10);
const area: number = calculateArea(rectangle);
const perimeter: number = calculatePerimeter(rectangle);
