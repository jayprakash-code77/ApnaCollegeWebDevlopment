// Inheritance >>> Inheritance is a mechanism that allows us to create new classes on the basis of already sxisting classes.
class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
        console.log("Person class constructor.")
    }
    identity() {
        console.log("I am human");
    }
}

class Student extends Person{
    constructor(name, age, marks) {
        console.log("Student class constructor.")
        super(name, age); // parent class constructor is beaing called
        this.marks = marks;
    }

    talk() {
        console.log(`I am a student. My name is ` + this.name);
    }
}

class Teacher extends Person{
    constructor(name, age, subject) {
        console.log("Teacher class constructor.")
        super(name, age); // parent class constructor is beaing called
        this.subject = subject;
    }

    talk() {
        console.log(`I am a teacher. My name is ` + this.name);
    }
}


let s1 = new Student("jay",19, 99.9);

console.log(s1.age);