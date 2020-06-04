import { load } from "./out.ts";

const object = load<{ square: (num1: number, num2: number) => number }>();

console.log(object.instance.exports.square(10, 10));
