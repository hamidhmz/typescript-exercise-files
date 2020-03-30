import { something } from '../modulesAndNameSpace/1/components/base-component';

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	const result = n1 + n2;
	if (showResult) {
		console.log(phrase + result);
	} else {
		return result;
	}
}

const number1 = 5; // 5.0
const number2: number = 2.8; //NOTE not good practice because when you assign there is no need to specify the type because it has it by own by assignment
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);

/* -------------------------------------------------------------------------- */
/*                                   object                                   */
/* -------------------------------------------------------------------------- */

const person = {
	name: 'hamid',
	age: 30
};
person.email = 'test@test.com'; //NOTE not allowed in ts because you can just assign name and age

const person1: object = {
	name: 'hamid',
	age: 30
};

person1.email = 'test@test.com'; // you cannot do this except you should use type casting in blow
(person1 as { email: string }).email = 'test@test.com';

const person2: {
	name: string;
	age: number;
} = {
	name: 'hamid',
	age: 30
};

/* -------------------------------------------------------------------------- */
/*                                    Array                                   */
/* -------------------------------------------------------------------------- */
let array1: string[];
let array2: (string | number)[];
let array3: string[] | number[];
let array4: any[];

array1 = ['str1', 'str2'];
array2 = ['str1', 1];
array2 = ['str1', 'str2'];
array2 = [6, 2];
array3 = ['str1', 'str2'];
array3 = [6, 2];
array4 = ['5', 2];

/* -------------------------------------------------------------------------- */
/*                                    tuple                                   */
/* -------------------------------------------------------------------------- */
let tuple1: [number, string];
let tuple2: [number, string, number, number, number];
tuple1 = [1, 'hamid'];
tuple2 = [1, 'hamid1', 2, 3, 4];

tuple2.push(10); //this is problem of ts because it cannot notice this problem
tuple2[5] = 10; // you cannot do this in js in tuple type

/* -------------------------------------------------------------------------- */
/*                                    enum                                    */
/* -------------------------------------------------------------------------- */

/* --------------------------------- define --------------------------------- */

enum enum1 { //default behavior ADMIN=0 , READ_ONLY=1, AUTHOR=2
	ADMIN,
	READ_ONLY,
	AUTHOR
}

enum enum2 { //custom behavior you can change values
	ADMIN = 1,
	READ_ONLY = 2,
	AUTHOR = 3
}

/* ---------------------------------- usage --------------------------------- */

const yourData = {
	name: 'hamid',
	age: 15,
	role: enum1.ADMIN
};

//checking the role:
if (yourData.role === enum1.ADMIN) console.log('he is admin');

/* -------------------------------------------------------------------------- */
/*                                     any                                    */
/* -------------------------------------------------------------------------- */
let any1: any;

/* -------------------------------------------------------------------------- */
/*                                    UNION                                   */
/* -------------------------------------------------------------------------- */
function unionExample(input1: number | string, input2: number | string) {
	let result;
	if (typeof input1 === 'number' && typeof input2 === 'number') {
		result = input1 + input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
}

const combinedAges = unionExample(30, 26);
const combinedNames = unionExample('Max', 'Anna');

/* -------------------------------------------------------------------------- */
/*                                literal Type                                */
/* -------------------------------------------------------------------------- */
let literal1: 'as-number' | 'as-text';

/* ---------------------------------- usage --------------------------------- */
literal1 = 'as-number';
literal1 = 'as-text';
literal1 = 'something else'; // NOTE you cannot do this // and just you can do two example upper

/* -------------------------------------------------------------------------- */
/*                                   Aliases                                  */
/* -------------------------------------------------------------------------- */

type aliases1 = number | string; // NOTE you can define more complicated union and stor it as alias

/* -------------------------------------------------------------------------- */
/*                       function return types and void                       */
/* -------------------------------------------------------------------------- */
function returnExample(n1: number, n2: number): number {
	return n1 + n2;
}

function voidTypeReturnExample(n1: number): void {
	console.log('result' + n1);
	return; //you can put it you can don not put it
}

function functionExample1(number: number): void {
	// it mean does not care about return but actually it would return undefined
	console.log('something');
}
function functionExample2(number: number): undefined {
	//you cannot do this because ts expect you return something
	console.log('something');
}
function functionExample3(number: number): undefined {
	//this is bad practice you need just remove return and put void or nothing
	console.log('something');
	return;
}
function functionExample4(number: number): string {
	return 'someString';
}

/* -------------------------------------------------------------------------- */
/*                                function type                               */
/* -------------------------------------------------------------------------- */

let functionVariable: Function;

function functionTypeExample(name: String) {
	console.log(name);
}

functionVariable = functionTypeExample;

let functionVariable1: (
	a: number,
	b: number,
	cb: (num: number) => void
) => String; // in here just function who have two input parameters and one callback function and string return type

/* -------------------------------------------------------------------------- */
/*                                   unknown                                  */
/* -------------------------------------------------------------------------- */
// NOTE unknown is better than any
let unknownEG: unknown;
let anyEG: any;
let unknownConflictExample: string;

unknownEG = '5';
unknownConflictExample = 'feiife';
anyEG = 'feiife'; // unknownConflictExample = unknownEG;// this is deferent between any and unknown type// you cannot assign unknown to string type
if (typeof unknownEG == 'string') {
	//js would understand this if and let you assign unknown to string

	unknownConflictExample = unknownEG;
}
unknownConflictExample = unknownEG; //you cannot assign unknown to string type out side of if
/* -------------------------------------------------------------------------- */
/*                                 never type                                 */
/* -------------------------------------------------------------------------- */
// there are two kind of function that never return
function generateNeverReturnEg1(): never {
	throw { message: 'msg' };
}
function generateNeverReturnEg2(): never {
	while (true) {}
}

let promise = new Promise(function(resolve, reject) {
	// after 1 second signal that the job is finished with an error
	setTimeout(() => reject(new Error('Whoops!')), 1000);
});
