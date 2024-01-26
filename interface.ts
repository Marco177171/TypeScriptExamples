interface Car {
	make: string;
	model: string;
	year: number;
}

function displayCar(car: Car) {
	console.log(`Car: ${car.year} ${car.make} ${car.model}`);
}

const myCar: Car = { make: 'Toyota', model: 'Corolla', year: 2022 };

displayCar(myCar);
