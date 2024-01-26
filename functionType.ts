// Declaring a function type with specified parameter and return types
type AddFunction = (a: number, b: number) => number;

// Implementing a function that matches the defined type
const add: AddFunction = (x, y) => x + y;

console.log(add(2, 3));

type GreeterFunction = (name: string, greeting?: string) => string;

const greet: GreeterFunction = (name, greeting = 'Hello') => {
	return `${greeting}, ${name}!`;
};

console.log(greet('Alice'));
console.log(greet('Bob', 'Hi'));

console.log('// FUNCTION OVERLOADING');

function display(value: string): void;
function display(value: number): void;
function display(value: string | number): void {
	if (typeof value === 'string') {
		console.log(`You entered a string: ${value}`);
	} else {
		console.log(`You entered a number ${value}`);
	}
}

display('Hello');
display(42);

console.log('// ARROW FUNCTION');

function multiply(a: number, b: number): number {
	return (a * b);
}

const multiplyArrow: (a: number, b: number) => number = (a, b) => a * b;

console.log(multiply(2, 3));
console.log(multiplyArrow(2, 3));
