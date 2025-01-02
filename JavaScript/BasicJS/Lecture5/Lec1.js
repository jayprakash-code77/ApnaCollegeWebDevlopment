// Object Literal :- Stores Key-Value pair

/*
let obj = {
    name:"Jay",
    age:20,
    division:'A'
}
console.log(obj.name);
console.log(obj.age);
console.log(obj.division);
*/

/*
const obj = {
    name:"Jay",
    age:20,
    division:'A'
}
*/

/*
const post = {
    username:"Jay",
    content:"I am a Java developer and full stack developer",
    likes:233,
    reposts:33,
    tags: ["@fullStack", "@apnaCollege"]
}
console.log(post["username"]);// using square bracket
console.log(post.content);// using dot operators
*/

// IMPORTANT :- 1) Javascript converts object keys to string and than check's and compare it. Even if we made the number as key, the number will be converted to string.




// Update/ add / delete field
/*
 const student = {
    name : "jay",
    age : 20,
    marks : 94.4,
    city : "Mumbai"
 }

 student.name = "Kajal"; // changing existing values.
 console.log(student.name);

 student.gender = "Female"; // adding new field
 console.log(student.gender);

//  delete the field
delete student.marks; // deleting student "marks" field.

console.log(student);
*/




// Object of Object
/*
const classInfo = {
    aman:{
        grade:"A+",
        city:"Delhi"
    },
    jay:{
        grade:"A+",
        city:"mumbai"
    },
    deepu:{
        grade:"A+",
        city:"prayagraj"
    }
}
console.log(classInfo);
*/



// Array of Object 
/*
const arr = [
    {
        grade:"A+",
        city:"Delhi"
    },
    {
        grade:"A+",
        city:"mumbai"
    },
    {
        grade:"A+",
        city:"prayagraj"
    }
]
console.log(arr[1].city);
// we can add/ delete/ and change value of object fields
*/


// Math functions
/*
console.log(Math.abs(-16.76375));
console.log(Math.pow(2,3));
console.log(Math.floor(-16.76375));
console.log(Math.floor(-16.76375)); // return the roundof to the nearest smallest value
console.log(Math.ceil(16.76375)); // return the roundof to the nearest largest value
console.log(Math.random(1, 10));

// code for generating random integers 
let step1 = Math.random();
let step2 = step1 * 10;
let step3 = Math.floor(step2);
console.log(step3);
*/

// 1 to 10
/*
let step1 = Math.random() * 10; // 10 :- means 0 to 9
let step2 = step1 + 1; // this will mak it from 1 to 10
let step3 = Math.floor(step2);
console.log(step3);
*/

// 20 to 24
/*
let s1 = Math.random() * 5;
let s2 = s1 + 20;
let s3 = Math.floor(s2);
console.log(s3);
*/











