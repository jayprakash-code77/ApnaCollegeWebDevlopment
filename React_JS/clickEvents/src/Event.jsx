/*
function HandleClick(event) {
    console.log(event);
}

function Button() {
    return (
        <>
        <button onClick={HandleClick}>Click</button>
        </>
    );
}
    */



function SubMessage(event) {
    event.preventDefault();
    console.log("Form is submitted!");
}

function Form() {
    return (
        <>
            <form action="">
                <input type="text" placeholder="Write somthing........" />
                <button type="submit" onClick={SubMessage}>Submit</button>
            </form>
        </>
    );
}


export default Form;