"use strict";
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(calculate(10, 20));
console.log(calculate(+true, +true));
function printInfo(valueOne, valueTwo) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20));
console.log(printInfo("10", "20"));
let arr;
arr = [1, 2, [true, false], ["A", ["B", 2]]];
let nothing;
let theName = "Elzero";
function showMyDetails(a = "", b = "", c) {
    return `${a}${b}${c}`;
}
console.log(showMyDetails(nothing, undefined, theName));
function showMsg(user, age, country) {
    return `${user}${age}${country}`;
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));
const printInConsole = (...args) => {
    args.forEach((arg) => console.log(`The Value Is ${arg} And Type Is ${typeof arg}`));
    return `Done`;
};
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=main.js.map