class parent1 {
	constructor(
		private name: string,
		public id: number,
		protected familyName: string
	) {}
	getName() {
		console.log(this.name);
	}
	getFamilyName() {
		console.log(this.familyName);
	}
	getId() {
		console.log(this.id);
	}
}

class child1 extends parent1 {
	constructor(nameChild: string, familyNameNew: string) {
		super(nameChild, 1, familyNameNew);
	}

	changeId(id: number) {
		this.id = id;
	}
	changeName(newName: string) {
		console.log('you cannot change private property from parent class');
		// this.name = newName;// you cannot do this because private property just are accessible from their own class not in child classes
	}
	changeFamilyName(newFamilyName: string) {
		this.familyName = newFamilyName;
	}
}

const test1 = new child1('hamidreza', 'nasrollahy');
test1.getName();
test1.changeName('editedName');
test1.getName();

test1.getId();
test1.changeId(2);
test1.getId();

test1.getFamilyName();
test1.changeFamilyName('new familyName');
test1.getFamilyName();
