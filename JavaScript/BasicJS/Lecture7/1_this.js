const student  = {
    fname:"Jay",
    lname:"Maurya",
    age: 20,
    course: "BSC FYIT",
    getFullName1() {
        console.log(this);  // this line will printd the student object
        // let fullName = fname +" "+lname; // this is wrong. fname will not be accessible
        let fullName = this.fname +" "+this.lname; // this is right
        return fullName;
    }
}
console.log(student.getFullName1());

function getWindow() {
    console.log(this); // this line return the "Window object"
}

getWindow();

