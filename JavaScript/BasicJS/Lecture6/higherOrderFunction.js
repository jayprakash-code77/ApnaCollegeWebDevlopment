/*
let greet = function() {
    console.log("Hello!!!");
}
let printGreet = function(fun, n) {  // this is called the higher order function
    for(let i=1; i<=n; i++) {
        fun();
    }
}
printGreet(greet, 5);
*/


// retrun a function
/*
function oddEvenTest(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }
    }
    else if(request == "even")
    {
        return function(n) {
            console.log(n%2 == 0);
        }
    }
    else
    {
        console.log("Wrong Request!!!");
    }
}
let func = oddEvenTest("even");
console.log(func(4));
*/



// Methods :- function inside object

const calculator = {

    add: function(a ,b) {
        return a+b;
    },
        mul: function(a,b) {
        return a*b;
    },
        div: function(a,b) {
        return a/b;
    }
};

console.log(calculator.add(2,3));






