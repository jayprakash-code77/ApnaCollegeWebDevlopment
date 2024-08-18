import "./ArrObje.css";

function ArrayAndObject({ name, price, features }) {
    console.log(features);
    const list = features.map((feature) => <li>{feature}</li>);
    return (
        <>

        <div className="ArrayAndObject">
            Jay prakash
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{list}</p>
        </div>
        </>
    );
};
export default ArrayAndObject;