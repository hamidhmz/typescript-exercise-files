class Department3 <T>{
    name:string;    // NOTE this field is public by default
    private employee:T[] = []; // NOTE you cannot access to this field out side of class
    constructor(n:string) {
        this.name = n;   
    }
    describe(this:Department3<T>){
        console.log('describe: ', this.name)
    }
    addEmployee(name:T){
        this.employee.push(name);
    }
    getEmployee(){
        console.log(this.employee)
    }
}

const department = new Department3('hamid');

department.addEmployee('employee')
department.addEmployee('employee1')
department.addEmployee('employee2')
department.addEmployee('employee3')

console.log(department.name)
department.name = 'something'
console.log(department.name)

console.log(department.employee)
department.employee[] = 'something'
console.log(department.employee)

department.getEmployee()






