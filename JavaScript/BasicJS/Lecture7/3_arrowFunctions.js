const sum = (a, b) => { // example of arrow function
    return a+b;
}
console.log(sum(1,2));


// arrow function which returns the  "Implicit return"
const multiply = (a,b) => ( // here the curly braces will not be there
    a * b   // this line will return the multiplication of "a" and "b".
);

console.log(multiply(2,2)+ " >>> Example of Implicir return");




// arror function with single parameter
const val = f => {
    console.log("Example of funtions with single parameter : "+f);
}

val("jay");


const fun = (p) => (
    // let ans = 3+p;
    p + multiply(3,3)
);

console.log(fun(3));