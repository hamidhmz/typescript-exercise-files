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
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);

/* -------------------------------------------------------------------------- */
/*                                   object                                   */
/* -------------------------------------------------------------------------- */

const person = {
  name: "hamid",
  age: 30
};

const person1: object = {
  name: "hamid",
  age: 30
};

const person2: {
  name: string;
  age: number;
} = {
  name: "hamid",
  age: 30
};

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
tuple1 = [1, "hamid"];
tuple2 = [1, "hamid1", 2, 3, 4];

/* -------------------------------------------------------------------------- */
/*                                    enum                                    */
/* -------------------------------------------------------------------------- */
enum enum1 {
  ADMIN = 1,
  READ_ONLY = 2,
  AUTHOR = 3
}

/* -------------------------------------------------------------------------- */
/*                                     any                                    */
/* -------------------------------------------------------------------------- */
let any1: any;

/* -------------------------------------------------------------------------- */
/*                                    UNION                                   */
/* -------------------------------------------------------------------------- */
function unionExample(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = unionExample(30, 26);
const combinedNames = unionExample("Max", "Anna");

/* -------------------------------------------------------------------------- */
/*                                literal Type                                */
/* -------------------------------------------------------------------------- */
let literal1: "as-number" | "as-text";

/* -------------------------------------------------------------------------- */
/*                                   Aliases                                  */
/* -------------------------------------------------------------------------- */

type aliases1 = number | string;

/* -------------------------------------------------------------------------- */
/*                       function return types and void                       */
/* -------------------------------------------------------------------------- */
function returnExample(n1: number, n2: number): number {
  return n1 + n2;
}

function voidTypeReturnExample(n1: number): void {
  console.log("result" + n1);
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
) => String; // just function who have two input parameters and one callback function and string return type

/* -------------------------------------------------------------------------- */
/*                                   unknown                                  */
/* -------------------------------------------------------------------------- */

let unknownEG: unknown;
let anyEG: any;
let unknownConflictExample: string;

unknownEG = 5;
unknownEG = "feiife";
anyEG = "feiife"; // unknownConflictExample = unknownEG;// this is deferent between any and unknown type

/* -------------------------------------------------------------------------- */
/*                                 never type                                 */
/* -------------------------------------------------------------------------- */
// there are two kind of function that never return
function generateNeverReturnEg1(): never {
  throw { message: "msg" };
}
function generateNeverReturnEg2(): never {
  while (true) {}
}

let promise = new Promise(function(resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
