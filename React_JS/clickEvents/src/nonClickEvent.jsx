function handleDoubleClick() {
    console.log("double clicked!");
}

function handleMouseOver() {
    console.log("Mouse Over me!");
}

function Button() {
    return (
        <>
        <button onDoubleClick={handleDoubleClick}>Double Click!</button>
        <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis modi sapiente saepe omnis laudantium, temporibus impedit officiis. Tempora iure voluptatum quis! Incidunt libero enim ipsam illum id! Voluptates, praesentium.</p>
        </>
    );
}

export default Button;