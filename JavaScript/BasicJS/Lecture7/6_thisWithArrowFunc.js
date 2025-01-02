const student = {
    name:"Jay",
    surname :"Maurya",
    age:20,
    marks: 90,
    prop : this, // this will have the scope of parent. which is student object. and student object has the global scop that is "Window".
    normFunc : function () {
        console.log(this);
        return this.name;
    },
    arrowFunc: () => {
        console.log(this);
        return this.age;
    }
}


console.log(student.prop);
console.log(student.normFunc());
console.log(student.arrowFunc()+" :- This will be Undefined");





