"use strict";
const x = 1912;
console.log(x);
let tuple;
tuple = ["Irineu", 10, true, [20, 30]];
let object = {
    name: "Serjao",
    age: 45
};
console.log(object.name);
//union type
let id = "abc123efg456";
id = 987654;
console.log(id);
let newId = "xyz";
console.log(newId);
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "m\u00E9dio";
    Size["G"] = "grande";
})(Size || (Size = {}));
const camisa = {
    name: "camisa gola v",
    size: Size.M
};
//literal types
let teste;
teste = "autenticado";
teste = null;
//funcoes
function sum(a, b) {
    return a + b;
}
console.log(Number(sum(0.1, 0.2).toFixed(1)) === 0.3);
//argumento opcional
function hello(firstName, lastName) {
    lastName ? console.log(`Hello ${firstName} ${lastName}`) : console.log(`Hello ${firstName}`);
}
hello("João");
hello("Napoleão", "Bonaparte");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
//generics
function showArrayItems(arr) {
    arr.forEach((item, index) => {
        console.log(`Item ${index + 1}: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItems(a1);
showArrayItems(a2);
//classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
}
const u1 = new User("João", "Admin", true);
//decorators
function baseParamters() {
    //givei
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
const p2 = new Person("João");
