function Logger1(logString: string) {
	return function(constructor: Function) {
		console.log(constructor);
		console.log(logString);
	};
}
function Logger2(logString: string) {
	return function(constructor: Function) {
		console.log(constructor);
		console.log(logString);
	};
}

@Logger1('LOGGING1 - PERSON')
@Logger2('LOGGING2 - PERSON')
class Person {
	name = 'Max';
	constructor() {
		console.log('Creating person object...');
	}
}

// const person3 = new Person();
