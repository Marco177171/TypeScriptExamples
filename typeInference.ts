console.log('// TYPE INFERENCE WITH BASIC TYPES')
let x = 10; // typescript deduces x is a number
let y = true; // typescript deduces it is a boolean
// x and y data type can't change anymore
console.log(`let x = 10 -> ${x} | let y = true -> ${y}`);

console.log('// TYPE INFERENCE WITH ARRAYS AND OBJECTS');
const numbers = [1, 2, 3]; // type of numbers in iferred as number[]
// numbers.push('four') wouldn't work, as 'four' is a string
const person = { name: 'Alice', age: 30 };
// type of person is inferred as {name: string, age: number};
// person.age = 'thirty' wouldn't work, as age is a number
console.log(`numbers: ${numbers} | person.name: ${person.name}, person.age: ${person.age}`);

console.log('// VARIABLE WITH TYPE ANNOTATION');
let username: string; // username can only be a string
username: 'Alice'; // valid assignment

function greet(name: string): string {
	return (`Hello, ${name}!`);
}

console.log('greet with declared var: ' + greet(`${username}`));
console.log('greet with literal var: ' + greet('Alice'));
