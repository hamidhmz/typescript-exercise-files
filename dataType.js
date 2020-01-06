function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5; // 5.0
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
/* -------------------------------------------------------------------------- */
/*                                   object                                   */
/* -------------------------------------------------------------------------- */
var person = {
    name: 'hamid',
    age: 30
};
var person1 = {
    name: 'hamid',
    age: 30
};
var person2 = {
    name: 'hamid',
    age: 30
};
/* -------------------------------------------------------------------------- */
/*                                    Array                                   */
/* -------------------------------------------------------------------------- */
var array1;
var array2;
var array3;
/* -------------------------------------------------------------------------- */
/*                                    tuple                                   */
/* -------------------------------------------------------------------------- */
var tuple1;
var tuple2;
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
add(number1, number2, printResult, resultPhrase);
