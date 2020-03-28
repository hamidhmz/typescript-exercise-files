function Logger(constructor: Function) {
	//when we define something eg class decorator would notice when you have define your class
	console.log('logging...');
	console.log(constructor);
}

@Logger
class Person {
	name = 'Max';
	constructor() {
		console.log('Creating person object...');
	}
}

// const person3 = new Person();
