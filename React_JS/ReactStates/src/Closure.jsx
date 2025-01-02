//Closure :- A closure is a feature in Javascript where an inner function has access to the outer (enclosing) fuction's variables.
//Note:- In JS , once a function completes its execution, any variable that were defined inside the function scope cease to exist.

// 
// Re-render :- In this the values of state variable changes only when re-render happens.

function outer() {
    let b = 10;
    function inner() {
        let a = 20;
        console.log(a+b);
    }
    return inner;
}

