class Department4<T> {
	private employee: T[] = []; // NOTE you cannot access to this field out side of class
	constructor(public name: string, private id: number) {}
	describe(this: Department4<T>) {
		console.log('describe: ', this.name);
	}
	addEmployee(name: T) {
		this.employee.push(name);
	}
	getEmployee() {
		console.log(this.employee);
	}
	getId() {
		console.log(this.id);
	}
}

const department5 = new Department4('hamid', 1);

console.log('department.name: ', department5.name);
department5.name = 'hamid1';
console.log('department.name: ', department5.name);

console.log('department.id: ', department5.id); //NOTE we cannot access to id property because it is private
department5.id = 'hamid1';
console.log('department.id: ', department5.id);
