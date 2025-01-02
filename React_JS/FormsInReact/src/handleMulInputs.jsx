import { useState } from "react";

function MultipleInput() {
    /* 
    // this can be done only in one state variable using object.
    let [fullName, setFullname] = useState("");
    let [userName, setuserName] = useState("");
   
    // we will solve this problem with only one handle function
    let handleNameChange = (event) => {
        setFullname(event.target.value);
        console.log(event.target.value);
    }

    let handleUsernameChange = (event) => {
        setuserName(event.target.value);
        console.log(event.target.value);
    }
    */


    let [formData, setFormData] = useState({ fullname: "Jay", username: "@jay" });

    let handleChangeData = (event) => {

        let keyName = event.target.name;
        let newkeyValue = event.target.value;

        setFormData((currData) => {
            currData[keyName] = newkeyValue;
            return { ...currData };
        });
    };


    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullname:"",
            username:""
        })
    }




    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="inputName">Full Name :</label>
                <input type="text" value={formData.fullname} onChange={handleChangeData} placeholder="Enter you full name" id="inputName" name="fullname" />
                <button type="submit">Submit</button>

                <br /><br /><br />

                <label htmlFor="inputUsername">Username :</label>
                <input type="text" value={formData.username} onChange={handleChangeData} placeholder="Enter you full name" id="inputUsername" name="username" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default MultipleInput;