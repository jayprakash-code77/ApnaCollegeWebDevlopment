import { useState } from "react";


function Form() {
    let [fullName, setFullname] = useState("");

    let handleNameChange = (event) => {
        setFullname(event.target.value);
        console.log(event.target.value);
    }
    return (
        <>
            <form action="">
                <label htmlFor="inputName">Full Name :</label>
                <input type="text" value={fullName} onChange={handleNameChange} placeholder="Enter you full name" id="inputName"/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Form;