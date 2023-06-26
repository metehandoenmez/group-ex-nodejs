import { Rectangle } from "./general";

// start
let greeting: string = "Hello";
const name1: string = "John";
let age: number = 25;

let userAge: number;
userAge = 25;

function sayHello(greeting: string, name: string | null): void {
  if (name !== null) {
    console.log(greeting + ", " + name + "!");
  }
}

sayHello("Hello there", null);

function getBirthYear(): number {
  const currentYear = new Date().getFullYear();
  return currentYear - age;
}

function multiply(a: number, b: number): number {
  return a * b;
}

// ===================

let num1 = 5;
let num2 = 10;

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function divide(a: number, b: number) {
  return a / b;
}

function calculate(a: number, b: number): number {
  const sum = add(a, b);
  const result = multiply(sum, num1);
  return divide(result, num2);
}

// ===================

function calculateArea(rectangle: Rectangle) {
  return rectangle.width * rectangle.height;
}

function calculatePerimeter(rectangle: Rectangle) {
  return 2 * (rectangle.width + rectangle.height);
}

function createRectangle(width: number, height: number): Rectangle {
  return { width, height };
}

const rectangle: Rectangle = createRectangle(5, 10);
const area = calculateArea(rectangle);
const perimeter = calculatePerimeter(rectangle);

type AType = {
  var1: number;
  var2: number;
  get1(): number;
};

interface A {
  var1;
  var2;
  get1();
}

class Bird implements AType {
  var1: number;
  var2: number;
  get1() {
    return 1;
  }
}

class Animal implements A {
  var1: number;
  var2: number;
  get1(): number {
    return 1;
  }
}

var a: A = {
  var1: undefined,
  var2: undefined,
  get1: function () {
    throw new Error("Function not implemented.");
  },
};

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John Doe",
  age: 30,
};
