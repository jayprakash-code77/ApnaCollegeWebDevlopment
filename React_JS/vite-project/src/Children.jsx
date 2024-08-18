import "./Children.css";
function Children(props) {
    return (
        <div className="Children">
            <h3>{props.name}</h3>
            <p>{props.surname}</p>
        </div>
    );
};
export default Children;