"use strict";
// ---------------------------
// ------ Assignment 1 -------
// ---------------------------
// Do Not Edit Here
let myData;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here
// Do Not Edit Here
let myInfo;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here
// Do Not Edit Here
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
function yesOrNo(val) {
    if (val > 10) {
        return true;
    }
    else if (val < 10) {
        return false;
    }
    else {
        return new Error;
    }
}
// Do Not Edit Here
// console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
function isHeOld(age) {
    if (age > 35) {
        return "Yes";
    }
    else {
        return "No";
    }
}
// Do Not Edit Here
// console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
let post;
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
// post = [100, "Title", true]; // Good
// post.push("Elzero"); // Error => Cant Add
// // Create Destructuring Here
// const id = post[0];
// const title = post[1];
// const state = post[2];
// // Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true
// ---------------------------
// ------ Assignment 7 -------
// ---------------------------
// Create Enums + Function Here
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = getInsane(10)] = "Insane";
})(Game || (Game = {}));
function getInsane(num) {
    return Game.Hard - num;
}
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
