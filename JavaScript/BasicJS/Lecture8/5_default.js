// we can pass default value to the function and in case if we don't pass that parameter in the function than the default value will be applied.

function sum(num2, num1 = 2) {
    return num1 + num2;
}
console.log(sum(2,4));// the value of both parameter is passed 
console.log(sum(2)); // only on parameter is passed to the function