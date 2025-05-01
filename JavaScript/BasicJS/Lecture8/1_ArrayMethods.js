// forEach loop
 let arr = [1,2,3,4,5];



 /*
//  here the function definition is written seperately
let print = (element) => {
    console.log(element);
}
arr.forEach(print); // FoeEach loop requires callback (arrow) function to be passed as parameter.
*/



/*
// here the function definition is passed as parameter to the "forEach" loop as callback function(arrow) function.
arr.forEach(function (element) {
    console.log(element);
})
    */


/*
// "forEach" with arrow function
 arr.forEach((element) => {
    console.log(element +" arrow func");
 })
    */





//  >>>>>>>>>>>>>>>>>>>>>>>>>>>  for each with OBJECTS<<<<<<<<<<<<<<<<

/*
let array = [
    {
        name:"jay",
        age:20
    },
    {
        name:"deepu",
        age:"20"
    }
]
array.forEach((ele) => {
    console.log("Name:- "+ele.name+" Age:- "+ele.age);
})
*/






