function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5; // 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';


/* -------------------------------------------------------------------------- */
/*                                   object                                   */
/* -------------------------------------------------------------------------- */

const person = {
    name: 'hamid',
    age: 30
}

const person1: object = {
    name: 'hamid',
    age: 30
}

const person2: {
    name: string;
    age: number;
} = {
    name: 'hamid',
    age: 30
}

/* -------------------------------------------------------------------------- */
/*                                    Array                                   */
/* -------------------------------------------------------------------------- */
let array1: string[];
let array2: string | number[];
let array3: any[];

/* -------------------------------------------------------------------------- */
/*                                    tuple                                   */
/* -------------------------------------------------------------------------- */
let tuple1: [number, string];
let tuple2: [number, string, number, number, number];
tuple1 = [1,"hamid"]
tuple2 = [1, "hamid1",2,3,4]

/* -------------------------------------------------------------------------- */
/*                                    enum                                    */
/* -------------------------------------------------------------------------- */
enum enum1 { ADMIN = 1, READ_ONLY = 2, AUTHOR = 3 }; 

add(number1, number2, printResult, resultPhrase);
