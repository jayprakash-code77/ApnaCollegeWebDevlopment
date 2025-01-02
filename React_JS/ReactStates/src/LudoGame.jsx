import { useState } from "react";

function Ludo() {

    let [moves, setMoves] = useState({ red: 0, blue: 0, green: 0, yellow: 0 });
    //With many update function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    /*
    let updateRed = () => {
        setMoves({ ...moves, red:moves.red+1});
    };
    let updateBlue = () => {
        setMoves({ ...moves, blue:moves.blue+1});
    };
    let updateGreen = () => {
        setMoves({ ...moves, green:moves.green+1});
    };
    let updateYellow = () => {
        setMoves({ ...moves, yellow:moves.yellow+1});
    };
    
    return (
        <>
        <h2>Game Begin</h2>
        <p>Red moves : {moves.red}</p>
        <button onClick={updateRed} style={{backgroundColor :"red"}}>Red +1</button>
        <br/><br/>
        <p>Blue moves : {moves.blue}</p>
        <button onClick={updateBlue} style={{backgroundColor :"blue"}}>Blue +1</button>
        <br/><br/>
        <p>Green moves : {moves.green}</p>
        <button onClick={updateGreen} style={{backgroundColor :"green"}}>Green +1</button>
        <br/><br/>
        <p>Yellow moves : {moves.yellow}</p>
        <button onClick={updateYellow} style={{backgroundColor :"yellow", color:"black"}}>Yellow +1</button>
        </>
    );
    */

    //With Single update function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const updateMove = (color) => {
        setMoves((prevMoves) => ({ ...prevMoves, [color]: prevMoves[color] + 1 }));
    };

    return (
        <>
            <h2>Game Begin</h2>
            <p>Red moves : {moves.red}</p>
            <button onClick={() => updateMove("red")} style={{ backgroundColor: "red" }}>Red +1</button>
            <br /><br />
            <p>Blue moves : {moves.blue}</p>
            <button onClick={() => updateMove("blue")} style={{ backgroundColor: "blue" }}>Blue +1</button>
            <br /><br />
            <p>Green moves : {moves.green}</p>
            <button onClick={() => updateMove("green")} style={{ backgroundColor: "green" }}>Green +1</button>
            <br /><br />
            <p>Yellow moves : {moves.yellow}</p>
            <button onClick={() => updateMove("yellow")} style={{ backgroundColor: "yellow", color: "black" }}>Yellow +1</button>
        </>
    );
}

export default Ludo;

