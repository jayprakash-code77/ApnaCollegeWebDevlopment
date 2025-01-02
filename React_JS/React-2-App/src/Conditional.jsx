// first way to use conditionlas 
function ConditionalFirstWay({ name, price }) {
    if (price > 2000) {
        return (
            <>
                <p>Name:{name}</p>
                <p>Price:{price}</p>
                <p>Discount is 5%.</p>
            </>
        );
    } else {
        return (
            <>
                <p>Name:{name}</p>
                <p>Price:{price}</p>
            </>
        );
    }

};
// export default ConditionalFirstWay;


function ConditionalSecondWay({ name, price }) {    // this method will create the extra paragraph tag (in care if the discount is not present)
    const isDiscount = price > 3000 ? "Discount 5%" : "";
    return (
        <>
            <p>Name:{name}</p>
            <p>Price:{price}</p>
            <p>{isDiscount}</p>
        </>
    );
}


// export default ConditionalSecondWay;


import "./conditional.css";
function ConditionalThirdWay({ name, price }) {
    // const isDiscount = ;

    return (
        <>
            <div className="product">
                <p>Name: {name}</p>
                <p>Price: {price}</p>
                {price > 3000 ? <p>Discount is 5%</p> : null}
            </div>
        </>
    );
}


export default ConditionalThirdWay;

