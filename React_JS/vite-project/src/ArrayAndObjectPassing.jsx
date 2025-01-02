import "./ArrObje.css";


function ArrayAndObject({Title, price, features}) {

    return (
        <>
        <div className="Product">
            <h1>{Title}</h1>
            <p>{price}</p>
            <p>{features[0]}</p>
        </div>
        </>
    );

}




/*
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
*/






export default ArrayAndObject;