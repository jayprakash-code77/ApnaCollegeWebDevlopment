function doSomething() {
        console.log("Hello!");
}


function EventClick() {
    return(
        <button onClick={doSomething}>Click Me</button>
    );
}
export default EventClick;