class example {
	readonly familyName = 'nasrollahy';
	constructor(
		public readonly name: string,
		private readonly id: number,
		readonly email: string
	) {}

	getName() {
		console.log(this.name);
	}
	getId() {
		console.log(this.id);
	}
	getEmail() {
		console.log(this.email);
	}
	getFamilyName() {
		console.log(this.familyName);
	}
}

const exampleInstance = new example(
	'hamid',
	1,
	'nasrollahy.hamidreza@gmail.com'
);

exampleInstance.getName();
exampleInstance.getId();
exampleInstance.getEmail();
exampleInstance.getFamilyName();

console.log('exampleInstance.name: ',exampleInstance.name)
// console.log('exampleInstance.id: ',exampleInstance.id)//NOTE id is private 
console.log('exampleInstance.email: ',exampleInstance.email)
console.log('exampleInstance.familyName: ',exampleInstance.familyName)


