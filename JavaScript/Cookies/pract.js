// set cookies function
function setCookie(name, value, days) { // name = cookiesName, value = cookiesValue
    let date = new Date(); // creating new date object
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // days in milliseconds
    let expires = "expires=" + date.toUTCString(); // setting the expiring date and storing in the "expires" variable
    document.cookie = name + "=" + value + "; " + expires + "; path=/"; // storing the cookie
}

setCookie("deepu", "develop", 7); // setting the cookie

// getCookie function => parameter(1) = pass cookie name
function getCookie(name) {
    let nameEQ = name + "="; // Preparing the name to match the cookie's name
    let cookiesArray = document.cookie.split(';'); // Split cookies into an array
    // itrating over the array
    for (let i = 0; i < cookiesArray.length; i++) {
        let c = cookiesArray[i].trim(); // removing the extra space
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length); // Return the cookie value
        }
    }
    return null; // if cookie is not find return null;
}
let cookieValue = getCookie("deepu"); //pass the cookies name
console.log(cookieValue); // Output: "Jay"


























/*
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // in milli seconds
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}
 
setCookie("username", "Jay", 7);
 
 
 
 
// Function to get the value of a cookie by its name
function getCookie(name) {
    let nameEQ = name + "="; // Prepare the name to match the cookie's name
    let ca = document.cookie.split(';'); // Split cookies into an array
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim(); // Trim any extra spaces
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length); // Return the cookie value
        }
    }
    return null; // Cookie not found
}
 
// Retrieve the "username" cookie and log its value
let username = getCookie("Jay");
console.log(username); // Output: "deepu" (if the cookie exists)

*/