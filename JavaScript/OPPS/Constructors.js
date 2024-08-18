// Constructor :- 

/*
function Person(name, age) {
    this.name = name;
    this.age = age;

    // this will count the number of object created.
        // Increment the count each time a new object is created
        if (typeof Person.count == 'undefined') {
            Person.count = 1;
        } else {
            Person.count++;
        }
}

// This will tell the "name" of a person.
Person.prototype.talk = function() {
    console.log(`My name is ${this.name}`);
};

// this will print the number of object created.  >>> This is NOT perefered
Person.prototype.numberOfObject = function () {
    console.log(Person.count);
}



let p1 = new Person("Raju", 20);
let p2 = new Person("Jay", 20);

// We can directly access the "Object count" OR the number of object created.
console.log("Number of object created is :"+Person.count);

*/





// another way to count the number of object created 
let numCount =0;
function Student(name, age) {
    this.name = name;
    this.age = age;
    numCount++;

}
let s1 = new Student("Raju", 20);
let s3 = new Student("Raju", 20);
let s2 = new Student("Raju", 20);


console.log(numCount);






