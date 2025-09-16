export const PI = 3.1416
const multiplicar = (a, b) => a * b;
const restar = (a, b) => a - b;

export function sumar(a, b) {
  assertNumber(a, "a");
  assertNumber(b, "b");
  return a + b;
}

export function modulo(a, b) {
  assertNumber(a, "a");
  assertNumber(b, "b");
  if (b === 0) throw new RangeError("No se puede calcular el módulo con divisor 0");
  return a % b;
}

export function dividir(a, b) {
  assertNumber(a, "a");
  assertNumber(b, "b");
  if (b === 0) throw new RangeError("No se puede dividir entre 0");
  return a / b;
}

function assertNumber(x, name) {
  if (typeof x !== "number" || !Number.isFinite(x)) {
    throw new TypeError(`${name} debe ser un número finito`);
  }
}

console.log(dividir(10, 2));
console.log(sumar(10, 2));
console.log(modulo(10, 3));