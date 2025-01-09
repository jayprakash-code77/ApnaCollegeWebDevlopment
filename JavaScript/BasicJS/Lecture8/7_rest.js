// rest :- allows a function to take an indefinite number of arguments and bundle them in an array.
/*
function sum(...args){ // here when we will pass the arguments, it will create the array of arguments.We can pass infinite args
    console.log(args);
    return args.reduce((add, ele) => add + ele);
}
console.log(sum(1,2,3,4,5));
*/


/*
// in-built function of javascript to store the arguments
function inBuiltArgsFunc(a,b,c) {
    console.log(arguments); // arguments is a collection. It is not exactly array.
    console.log(arguments.length);
    arguments.push(3); // this will generate an error
} 
inBuiltArgsFunc(1,2,3);
*/


/*
// finding minimum value from the args
function min(...args) {
    return args.reduce((min, ele) => {
        if (min > ele) {
            return ele;
        }
        return min;
    })
}
console.log(min(1, 2, 3, 4, 5, 6));
*/

function min(msg, ...args) {
    console.log(msg);
    return args.reduce((min, ele) => {
        if (min > ele) {
            return ele;
        }
        return min;
    })
}
console.log(min("I am Happy",1, 2, 3, 4, 5, 6));