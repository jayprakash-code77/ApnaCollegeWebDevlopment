// reduce :- this method Reduces the array to a single value
// syntax :- array.reduce(accumulator, element); => accumulator:stores the returned value of the previous operation.

/*
let arr = [1,2,3,4,5];
let ans = arr.reduce((accu, element) => {
    return accu+element;
})
console.log(ans);
*/


let arr = [1,2,3,4,5,9,13,1,3,4,5];
let maxNum = arr.reduce((max, element) => {
    if(element >= max) {
        return element;
    }

    return max;
});
console.log(maxNum);
