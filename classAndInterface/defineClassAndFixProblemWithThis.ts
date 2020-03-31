class Department1 {
    name:string;    
    constructor(n:string) {
        this.name = n;   
    }
    describe(){
        console.log('describe: ', this.name)
    }
}

const department1 = new Department1('passed arg');
console.log(department1.describe());

const bugDepartment = { describe : department1.describe }

bugDepartment.describe()// NOTE in here this refers to bugDepartment

class Department2 {
    name:string;
    constructor(n:string) {
        this.name = n;
    }
    describe(this:Department2){
        console.log('describe: ',this.name);
    }
}

const department2 = new Department2('passed arg');
console.log(department2.describe());

const bugDepartment2 = { describe : department2.describe }

bugDepartment2.describe()// NOTE in here typescript would give an error

