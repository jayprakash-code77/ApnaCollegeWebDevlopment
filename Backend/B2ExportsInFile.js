// TO RUN THIS FILE code first remove   "type": "module", from package.json FileSystem.

// arrow functions
const sum = (a, b) => a+b;
const mul = (a, b) => a*b;
const div = (a, b) => a/b;
const sub = (a, b) => a-b;

// exporting information to other files.
// module.exports  >>> This is an object which by default returns empty object.
/*
module.exports = mul;  // code  >>> IMPORTANT >> This code will work only if  "type": "module", written in the package.json file is removed.
*/

// Ways to export the information
// way 1) 
/*
const obj = { //>>> IMPORTANT >> This code will work only if  "type": "module", written in the package.json file is removed.

    sum: sum,
    mul: mul,
    div: div,
    sub: sub
};
module.exports = obj;
*/

// way 2)
/*
module.exports = {
    sum: sum,
    mul: mul,
    div: div,
    sub: sub
};
*/

// way 3)
/*
module.exports.sum = (a, b) => a+b;
module.exports.mul = (a, b) => a*b;
module.exports.div = (a, b) => a/b;
module.exports.sub = (a, b) => a-b;
*/

// way 4) >>> this will work only if we treat the exports as an object

exports.sum = (a, b) => a+b; // this all are valid 
exports.mul = (a, b) => a*b;
exports.div = (a, b) => a/b;
exports.sub = (a, b) => a-b;
// exports = 5; // this is not valid.



