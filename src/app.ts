const userName = "Ash";
// userName = "AJ";

let age = 37;
age = 30;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     let isOld = true;
// }

// console.log(isOld);

const add = (a: number, b: number = 1) => a + b;

const printOutput: (a: string | number) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(5));
