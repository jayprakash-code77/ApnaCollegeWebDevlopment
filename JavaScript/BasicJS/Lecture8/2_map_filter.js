// MAP >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>:- returns an array. It performs operation and retrun the new array with the changes made.

/*
// example :- double all the integers of an array
let num = [1,2,3,4];
console.log(num);
let double = num.map((ele) => {
    return ele * 2;
});
console.log(double);
*/



/*
// adding gpa in the  property to all the object
let student = [
    {
        name:"jay",
        age:20,
        marks: 90
    },
    {
        name:"deepu",
        age:"20",
        marks: 95
    }
]
const updatedStudentData = student.map((ele) => {
    return {
        ...ele,
        gpa: ele.marks / 10
    }
});
console.log(updatedStudentData);
*/





// Filter >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*
// It returns the new array. For each element in array, If the call-back function in the filter function return true than that element will be added to the new array if it return false that value will not be added to the new array.
let array = [1,2,3,4,5,6,7,8];
// filter even numbers from the array
let even = array.filter((ele) => (
    ele % 2 == 0
));
// filter even numbers from the array :
let odd = array.filter((ele) => {
    return ele % 2 !== 0
});
console.log(even);
console.log(odd)
*/









