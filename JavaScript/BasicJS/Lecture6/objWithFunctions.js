/*
let funcObj = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    }
}
console.log(funcObj.add(3, 1));
console.log(funcObj.add(2,3));
*/


// sort hand for defining the the funtion as object field
// function inside object is called "Method".
let funcObj = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    }
}
console.log(funcObj.add(3, 1));
console.log(funcObj.add(2,3));