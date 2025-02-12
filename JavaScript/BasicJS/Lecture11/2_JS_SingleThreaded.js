// single threaded :- JS can do one working at a time.
// to do more work at a time or if we do not want to wait for work: we can use : 1)callbacks 2)setTimeout


setTimeout(() => { // the work of wait is performed by browsers. Browswer are written using c++ are java and this languages support multithreading.
    console.log("Hello Single threaded JS");// this will run after waiting 2 seconds
}, 2000);
console.log("I am ahead"); // this will run first 



// synchronous :- running thing one by one
// asynchronous :- running thing any way not one by one.

// NOTE: Javascript is single threaded but but but it acts as an asynchronous.

