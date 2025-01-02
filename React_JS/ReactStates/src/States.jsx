//State in React :- The state is a built-in React object that is used to contain data or informmation about the component . A compomponent state can change over timw. Whenever it changes the component re-renders.
// Hooks :- Firstly function components use to be written as class components. But in React version 16.8 . the concept of Hooks came. Hooks let us use State and other React Features without writing a Class.    Class Component is same as Function Component + Hooks
// Hooks :- 1) useState();


import { useState } from "react";

function Counter() {

    let [count, setCount] = useState(0);

    function incCount() {
        setCount(count+1);
    }


    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}


export default Counter;