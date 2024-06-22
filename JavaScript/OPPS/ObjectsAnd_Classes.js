// Object Oriented Programming
// 1) prototypes
// 2) new Operator
// 3) constructors
// 4) classes
// 5) keywords like "extends, super"


// >>>>>>>>>>>>>>>>>> Object Prototypes <<<<<<<<<<<<<<<<<<<<<< //
// Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// prototype is the single template object that all objects inherit methods and properties from without having their own copy.

let arr1 = [1,2,3,4];
arr1.sayHello = () => {
    console.log("Hello! arr1.")
}
    

let arr2 = [1,2,3,4]; // for this  arr1.push() === arr2.push() is true.
arr2.sayHello = () => {
    console.log("Hello! arr1.")
}


// Making the reference of the Actual array object prototype
/*
let array = [1,2,3,4];

let refe = array.__proto__;
// console.log(refe);

// for our own requirement we can change the prototye fuctions functionality.
array.push = (num) => {
    console.log("Pushing the number: "+num);
}
array.push(3);
*/


// Excessing the Actual Array Prototype object.
/*
// For Array Prototype
console.log(Array.prototype);
// For String Prototype
console.log(String.prototype);
// 
*/


// Factory Function >>> A function that create the object.
function PersonMaker(name, age) {
    const obj = {
        name : name,
        age : age,

        /*
        talk : ()=>{ // The talk method is defined using an arrow function. Arrow functions do not bind their own this value but inherit it from the surrounding lexical context. In this case, the surrounding context is the global scope (or wherever PersonMaker is called), so this inside the talk method refers to the global object (usually window in a browser environment or global in Node.js), not the object created by PersonMaker. Therefore, this.name will be undefined, resulting in the output: "My name is undefined".
            console.log(`My name is ${this.name}`);
        }*/

        talk () { // The talk method is defined using a regular function expression. Regular functions create their own this context when invoked. When talk is called as a method of the object created by PersonMaker, this refers to that object. Therefore, this.name correctly accesses the name property of the object, resulting in the expected output: "My name is Raju".
            console.log(`My name is ${this.name}`);
        }


    };

    return obj;
}

let p1 = PersonMaker("Raju", 45);
console.log(p1.talk());

// (problem with FACTORY function) = Objects that are created using factory function have there own copy of every property and methods that exists in factory function. TO VOVERCOME THIS problem WE CAN USE THE CONCEPT OF "CONSTRUCTORS AND NEW OPERATOR".