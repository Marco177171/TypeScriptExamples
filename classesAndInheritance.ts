class Animal {
	protected name: string;

	constructor(name: string) {
		this.name = name;
	}
	move(distance: number = 0) {
		console.log(`${this.name} moved ${distance} meters`);
	}
}

// extends -> inheritance
class Dog extends Animal {
	constructor(name: string) {
		super(name);
	}
	bark() {
		console.log(`${this.name} barks!`);
	}
}

const myDog = new Dog('Buddy');
myDog.bark(); // Dog's method
myDog.move(10); // Animal's method
