// "use strict";

var test = 123;
const test1 = 123;
let test2 = 123;

// console.log(window.test); // 123 
// console.log(window.test1); // undefined
// console.log(window.test2); // undefined

{
    var test3 = 10;
    const test4 = 10;
    let test5 = 10;
}

// console.log(window.test3); // 10
// console.log(window.test4); // undefined
// console.log(window.test5); // undefined

// console.log(test3); // 10
// console.log(test4); // ReferenceError
// console.log(test5); // ReferenceError

let arr = [123,1,23,12,3,12,3123];

// console.log(i); // undefined

// i = 10;

// console.log(i); // 10

for(var i = 0;i < arr.length;i++) {
    // console.log(i); // 0, 1, 2, 3, 4, 5, 6
    // console.log(window.i); // 0, 1, 2, 3, 4, 5, 6
}

// console.log(i); // 7

// i = 15;

// console.log(i); // 15

function varTest() {
    console.log(test); // 123
    console.log(test1); // 123
    console.log(test2); // 123

    console.log(window.test); // 123
    console.log(window.test1); // undefined
    console.log(window.test2); // undefined
}

// varTest();

function varTest2() {
    var obj = {
        name: "John",
    };

    // console.log(obj); // obj
}

// console.log(obj); // Reference Error 

// varTest2();

function varTest3() {
    y = 1;  // ReferenceError in "strict mode";
}

// varTest3();

// console.log(y); // 1
// console.log(window.y); // 1 

var x = 1;
z = 2;

delete this.x; // TypeError in "strict mode";
delete this.z; 

// console.log(window.x); // 1
// console.log(window.z); // undefined

kek = 2;
var kek;

// console.log(kek);

var newTest = 0;

function f() {
    var newTest = newTest1 = 1; // ReferenceError in strict mode
}

f();

// console.log(newTest, newTest1); // 0, 1

var user = "John";

// console.log(typeof car); // undefined
// console.log(window.car); // undefined

function check() {
  var airplane = "Airbus";

  console.log(user, airplane); // "John", "Airbus"

  function buy() {
    user = "Alice";
    airplane = "Boeing";
    car = "Ferrari";
  } // ReferenceError in strict mode

  buy();
  console.log(user, airplane, car); // "Alice", "Boeing", "Ferrari"
  console.log(window.car); // "Ferrari";
}

// check();

// console.log(window.car); // "Ferrari"