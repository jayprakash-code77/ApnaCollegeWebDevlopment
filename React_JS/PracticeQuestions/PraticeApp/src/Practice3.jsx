import "./pratice3.css"
import { useState } from "react";

function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let likeStyle = {color : "red"};
    function toggle() {
        setIsLiked(!isLiked);
        console.log(isLiked)
    }
    return (
        <>
            <h1>States in React</h1>
            <p onClick={toggle}>
                {
                    isLiked ? <i className="fa-solid fa-heart" style={likeStyle}></i> : <i className="fa-regular fa-heart" ></i>
                }
            </p>
        </>
    );
}

export default LikeButton;

/* 
<p onClick={toggle}>
<i className="fa-regular fa-heart" ></i></p 
<p><i className="fa-regular fa-heart" ></i></p>
{!isLiked ?  : }
*/
