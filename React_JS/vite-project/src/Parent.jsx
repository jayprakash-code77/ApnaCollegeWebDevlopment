import Children from "./Children.jsx";

function Parent(props) {
    return (
        <div className="card">
            <Children {...props} />
        </div>
    );
}

export default Parent;