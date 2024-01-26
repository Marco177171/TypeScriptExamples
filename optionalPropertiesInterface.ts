interface Person {
	name: string;
	age?: number;
}

function greet(person: Person) {
	if (person.age !== undefined) {
		return (`Hello, ${person.name}, you are ${person.age} years old!`);
	} else {
		return (`Hello, ${person.name}`);
	}
}

const person1: Person = {name: 'Alice'};
const person2: Person = {name: 'Bob', age: 25};

console.log(greet(person1));
console.log(greet(person2));

