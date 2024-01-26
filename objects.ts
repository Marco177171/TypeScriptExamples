interface Person {
	name: string;
	age: number;
}

function greet(person: Person) {
	return `Hello, ${person.name}!`;
}

const newPerson = { name: 'Alice', age: 30 };

console.log(greet(newPerson));
