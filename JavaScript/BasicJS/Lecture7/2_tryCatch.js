function withOutTry() {
    console.log("hello1");
    console.log("hello1");
    console.log(i); // this will give error and all the task will not happen after this which are left.
    console.log("hello2");
    console.log("hello2");
    console.log("hello2");
}

function funcWithTry() {
    console.log("world1");
    console.log("world1");
    try {
        console.log(i); // this will give error and it will pass the error to catch
    } catch (error) {
        console.log("Error :- 'i' is not defined! " + error); // here the catch will handle the error and the code will continue to run the rest code down.
    } 
    console.log("world2");
    console.log("world2");
    console.log("world2");
}


funcWithTry();
console.log("\n");
withOutTry(); // this will give error 
