"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5; // 5.0
const number2 = 2.8;
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
const person1 = {
    name: 'hamid',
    age: 30
};
const person2 = {
    name: 'hamid',
    age: 30
};
/* -------------------------------------------------------------------------- */
/*                                    Array                                   */
/* -------------------------------------------------------------------------- */
let array1;
let array2;
let array3;
/* -------------------------------------------------------------------------- */
/*                                    tuple                                   */
/* -------------------------------------------------------------------------- */
let tuple1;
let tuple2;
tuple1 = [1, "hamid"];
tuple2 = [1, "hamid1", 2, 3, 4];
/* -------------------------------------------------------------------------- */
/*                                    enum                                    */
/* -------------------------------------------------------------------------- */
var enum1;
(function (enum1) {
    enum1[enum1["ADMIN"] = 1] = "ADMIN";
    enum1[enum1["READ_ONLY"] = 2] = "READ_ONLY";
    enum1[enum1["AUTHOR"] = 3] = "AUTHOR";
})(enum1 || (enum1 = {}));
;
/* -------------------------------------------------------------------------- */
/*                                     any                                    */
/* -------------------------------------------------------------------------- */
let any1;
/* -------------------------------------------------------------------------- */
/*                                    UNION                                   */
/* -------------------------------------------------------------------------- */
function unionExample(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = unionExample(30, 26);
const combinedNames = unionExample('Max', 'Anna');
/* -------------------------------------------------------------------------- */
/*                                literal Type                                */
/* -------------------------------------------------------------------------- */
let literal1;
/* -------------------------------------------------------------------------- */
/*                       function return types and void                       */
/* -------------------------------------------------------------------------- */
function returnExample(n1, n2) {
    return n1 + n2;
}
function voidTypeReturnExample(n1) {
    console.log('result' + n1);
}
/* -------------------------------------------------------------------------- */
/*                                function type                               */
/* -------------------------------------------------------------------------- */
let functionVariable;
function functionTypeExample(name) {
    console.log(name);
}
functionVariable = functionTypeExample;
let functionVariable1; // just function who have two input parameters and one callback function and string return type
/* -------------------------------------------------------------------------- */
/*                                   unknown                                  */
/* -------------------------------------------------------------------------- */
let unknownEG;
let anyEG;
let unknownConflictExample;
unknownEG = 5;
unknownEG = "feiife";
anyEG = "feiife"; // unknownConflictExample = unknownEG;// this is defernt between any and unknown type
/* -------------------------------------------------------------------------- */
/*                                 never type                                 */
/* -------------------------------------------------------------------------- */
// there are two kind of function that never return
function generateNeverReturnEg1() {
    throw { message: 'msg' };
}
function generateNeverReturnEg2() {
    while (true) {
    }
}
let promise = new Promise(function (resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});
class Department2 {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
}
const accounting85 = new Department2('Accounting');
accounting85.describe();
