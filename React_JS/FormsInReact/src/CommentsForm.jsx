
import { useState } from "react";
import "./commentForm.css";
export default function CommentForm() {
    let [formData, setFormData] = useState({
        username:"",
        comment:"",
        rating:5
    });

    let handleInputChange = (event) =>{

        setFormData((currdata) => {
            return {...currdata, [event.target.name]:event.target.value}
        })
        
        console.log(event.target.name);
        console.log(event.target.value);

    }
    return (
        <>
            <div><h3>Give a comment!</h3></div>
            <form action="">
                <div>
                    {/* <label htmlFor="username" style={{color:"black"}}>Username:</label> */}
                    <input type="text" name="username" id="username" placeholder="Enter user name" onChange={handleInputChange} />
                    <br /><br />
                    {/* <label htmlFor="username" style={{color:"black"}}>Comment:</label> */}
                    <textarea name="comment" id="comment" onChange={handleInputChange} placeholder="Enter the comment..."></textarea>
                    <br /><br />
                    {/* <label htmlFor="username" style={{color:"black"}}>Rating:</label> */}
                    <input type="number" name="rating" id="rating" min={0} max={5} onChange={handleInputChange} placeholder="Enter the number between 0-5"/>
                </div>
                <br /><br />
                <button type="submit" id="submitButton">Submit</button>
            </form>
        </>
    )
}

