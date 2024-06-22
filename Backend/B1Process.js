// Commands
// Process >>> This is the object that provides information about and control over, current Node.js process.
// 1) process 
// 2) process.release   >>> to check the details of release.

// process.argv >>> returns an array containing the command-line arguments passed when the Node.js process was launched.
// code >>>

console.log(process.argv);
let arg = process.argv;
for (let i = 2; i < arg.length ; i++) {
    console.log("Name:- "+ arg[i])
}
