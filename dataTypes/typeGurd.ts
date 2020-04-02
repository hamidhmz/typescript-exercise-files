// interface ElevatedEmployee1 extends Employee, Admin1 {}
type Admin1 = {
    name: string;
    privileges: string[];
};

type Employee1 = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee1 = Admin1 & Employee1;


type Combinable1 = string | number;
type Numeric1 = number | boolean;


function add2(a: Combinable1, b: Combinable1) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}


type UnknownEmployee1 = Employee1 | Admin1;

function printEmployeeInformation(emp: UnknownEmployee1) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() });

                               
                               
                               
//..............//


class Car1 {
    drive() {
        console.log('Driving...');
    }
}

class Truck1 {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount);
    }
}

type Vehicle1 = Car1 | Truck1;

const v3 = new Car1();
const v4 = new Truck1();

function useVehicle1(vehicle: Vehicle1) {
    vehicle.drive();
    if (vehicle instanceof Truck1) {
        vehicle.loadCargo(1000);
    }
}

useVehicle1(v3);
useVehicle1(v4);


//.....................//


interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal1 = Bird | Horse;

function moveAnimal(animal: Animal1) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });