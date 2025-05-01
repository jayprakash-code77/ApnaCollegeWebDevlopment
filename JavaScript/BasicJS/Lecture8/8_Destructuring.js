// array destructuring :- Storing the value of array into multiple variables.
/*
let name = ["Jay", "raju", "beena", "prakash", "maurya"];
let [Coder, Invester, ...leftValues] = name;
console.log(Coder, Invester, leftValues);
*/




// object destructuring :- 

const student ={
    name:"Jay",
    age:20,
    clas:9,
    subject:["hindi", "math", "CS", "science"],
    username:"jay@gmail.com",
    password:"jayshri567"
}

// destructuring
const {username:email , password, city="Mumbai"} = student; // if the city will not be present, than "Mumbai will be set as default city". 
console.log(email);
console.log(password);


/*
 let username = student.username; // this will tae lot of time. If we have lot of object will lot of information.
 let password = student.password; //
 */
 

