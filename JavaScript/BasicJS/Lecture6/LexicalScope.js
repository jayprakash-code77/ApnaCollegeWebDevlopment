/*
function outerFunction() {
    let out = 7;
    function innerFunction() { // it cannot be used in out of outer function.
        let inner = 9;
        console.log("I am outer :"+out);
    }
    innerFunction();
    // console.log(inner); // it will give error

}
outerFunction();
*/

/*
let greet = "Hello"; // global scope
function changeGreet() {
    let greet = "Namaste"; // function scope
    console.log(greet);
    function innerGreet() {
        console.log(greet); // lexical scope
    }
    innerGreet(); 
}
console.log(greet);
changeGreet();
*/

// Functions expression
let name = "Jay";
let sum = function(num1, num2) {
    return num1+num2;
}

console.log(sum(2,3));




