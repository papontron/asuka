import { a, b } from './sub.js';
function sumar(a: number, b: number) {
  return a + b;
}

console.log(sumar(a, b) + sumar(12, 34) + 45);
