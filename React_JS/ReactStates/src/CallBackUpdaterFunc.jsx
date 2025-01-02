import { useState } from "react";


// Updater function have to specific cases:- 1)New value in updater function depends to Old value. For this we use "Call Back" 2) New value in updater function NOT depend on Old value.Fro this we normal flow will be maintained.

function Counter() {
    let [count, setCount] = useState(0); // initialization
    /*
        let incCount = () => {
            setCount(count+1);  // set functions are asyncronious function.
            setCount(count+1); // this will not have any effect, the count will increase by only one value. Note:- To do this task of Calling set function(Updater) two or more tomes, we have to use "Call Back".
        }
    */

    // using call back updater function
    let incCount = () => {
        setCount((currValue) => {
            return currValue + 1;
        });
        setCount((currValue) => {
            return currValue + 2;
        });
    }

    return (
        <>
            <h2>Count : {count}</h2>
            <button onClick={incCount}>Increase Count</button>
        </>
    );
}
// In use state the Re-Render will happen only if the some changes are done in the State , if the value is same as the previous value of State than the Re-Render will not happen.

// export default Counter;



function initialization() {
    console.log("initialization method was executed!");
    return Math.random();
}
function PassingFunctionToUseState() {
    //let [count, setCount] = useState(initialization()); // This will call the "initialization" function every time when Re-render will happen, because here the function "Is Executed".
    let [count, setCount] = useState(initialization);// This will call the "initialization" function only First time when Re-render will happen, because here the function "Is NOT Executed". Because only the reference of the method is passed.
    console.log("Component was rendered.")
    let plusCount = () => {
        setCount(count+1);
    }

    return (
        <>
        <h2>Count :{count}</h2>
        <button onClick={plusCount}></button>
        </>
    );
}

export default PassingFunctionToUseState;

