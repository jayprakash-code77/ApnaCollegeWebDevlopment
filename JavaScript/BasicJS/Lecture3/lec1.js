/*
let nam = "           Kisan           Bhul";
console.log(nam);
let ans = nam.trim(); // this will not change the original string. It will return new string.
console.log(ans);
*/



// JavaScript Basic String Methods

// 1. `charAt(index)`: Returns the character at the specified index.
// 2. `charCodeAt(index)`: Returns the Unicode of the character at the specified index.
// 3. `concat(str1, str2, ...)`: Joins two or more strings and returns a new string.
// 4. `endsWith(searchString, length)`: Checks if a string ends with specified characters.
// 5. `includes(searchString, position)`: Checks if a string contains specified characters.
// 6. `indexOf(searchValue, start)`: Returns the first index at which a specified value occurs.
// 7. `lastIndexOf(searchValue, start)`: Returns the last index at which a specified value occurs.
// 8. `localeCompare(compareString)`: Compares two strings in the current locale.
// 9. `match(regex)`: Matches a string against a regular expression and returns an array of results.
// 10. `matchAll(regex)`: Returns an iterator with all matches of a string against a regex.
// 11. `padEnd(targetLength, padString)`: Pads the end of a string with another string.
// 12. `padStart(targetLength, padString)`: Pads the start of a string with another string.
// 13. `repeat(count)`: Returns a new string with a specified number of copies of an existing string.
// 14. `replace(searchValue, newValue)`: Replaces specified value with another value in a string.
// 15. `replaceAll(searchValue, newValue)`: Replaces all occurrences of a specified value in a string.
// 16. `search(regex)`: Searches a string for a value that matches a regex and returns the index of the match.
// 17. `slice(start, end)`: Extracts a section of a string and returns it as a new string.
// 18. `split(separator, limit)`: Splits a string into an array of substrings.
// 19. `startsWith(searchString, position)`: Checks if a string starts with specified characters.
// 20. `substring(start, end)`: Returns a substring between two indexes.
// 21. `toLowerCase()`: Converts a string to lowercase.
// 22. `toUpperCase()`: Converts a string to uppercase.
// 23. `trim()`: Removes whitespace from both ends of a string.
// 24. `trimStart()`: Removes whitespace from the beginning of a string.
// 25. `trimEnd()`: Removes whitespace from the end of a string.
// 26. `valueOf()`: Returns the primitive value of a string.




// Method Chainning
// let nam = "Kishan";
// let ans = nam.trim().toUpperCase();  // this method chaining
// console.log(ans);


















// Array >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let arr = ["Kishan", "Japrakash"];
// // console.log(arr[0]);
// arr[0] =  "Deepu Chutiya";
// console.log(arr[0]);

// let str = "Maurya";
// console.log(str[0]);
// str[0] = "K";
// console.log(str[0]);



// Methods of array

/*
let arr = [1,2,3,4,5,6];
console.log(arr);
arr.pop();// remove element from last
console.log(arr);
arr.push(9); // adding element to last
console.log(arr);
arr.shift();// remove element from last
console.log(arr);
arr.unshift(9); // adding element to last
console.log(arr);
*/





/*
let start = ["january","july","march","August"];
console.log(start);
start.shift();
let first = start.shift();
start.unshift("June");
start.unshift(first);
console.log(start);
let final = ["July", "June", "March", "August"];
*/


// "includes()" method
// "indexOf()" method
// "concat()" method
// "reverse()"  method
// "slice()" method
// "Sort()":- This method only works for String and not for numbers. This method convert data into String and then sorts the data, which create problem.


/*
let arr = [1,2,3,4,432,43,22,3456,124,843];
let ans = arr.slice(0,3);
console.log(ans);
*/

/*
let arr = [1,2,3,4,432,43,22,3456,124,843];
let ans = arr.slice(0,3);
console.log(ans);
*/


// Array References :- 
/*
let arr = [1,2,3,4,5];
let arrCopy = arr;
console.log(arr);
console.log(arrCopy);

arr.reverse();
console.log(arr);
console.log(arrCopy);

// arrCopy.reverse();
// console.log(arr);
// console.log(arrCopy);
*/



// constant array :- Foe this trype of array values can be added or removed but the new array cannot be created and assigned to the same constant variable.
/*
const arr = [1,4,7,3,5,14,34]; 
arr.pop();
arr.pop();
arr.push(78);
console.log(arr);
*/




















