abstract class abstract1 {
	abstract name = 'hamid';
	abstract family = 'nasrollahy';
	id: number;
	constructor(id: number) {
		this.id = id;
	}
	abstract abstractFunc(something: string): void;
}

class child2 extends abstract1 {
	name: string;
	family: string;
	constructor(name: string, family: string) {
		super(1);
		this.name = name;
		this.family = family;
	}
	abstractFunc(something: string): void {
		throw new Error('Method not implemented.');
	}
}
