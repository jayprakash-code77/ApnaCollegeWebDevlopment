import "./conditional.css"
function DynamicProduct({ name, price, feature }) {
    // let styles = { backgroundColor: "blue" }; // this will apply to every product
    // let styles = { backgroundColor: price > 100 ? "pink" : "" }; // if I want to check this condition again, than I have to write it again.
    let isCondition = price > 100;
    let styles = { backgroundColor: isCondition ? "pink" : "" };

    return (
        <>
            <div className="product" style={styles}>
                <h3>{name}</h3>
                <p>Price:{price}</p>
                <p>Feature:{feature}</p>
                {/* {price > 100 ? <p>Discount is 5%</p> : null}    */}
                {isCondition ? <p>Discount is 5%</p> : null}
            </div>
        </>
    );
}

function Dynamic() {
    return (
        <>
            <div className="Product" >
                <DynamicProduct name={"Tulsi"} price={15} feature={"Hybrid"} />
                <DynamicProduct name={"Panda"} price={250} feature={"Hybrid"} />
                <DynamicProduct name={"Battle Palm"} price={500} feature={"Hybrid"} />
                <DynamicProduct name={"Cactus"} price={90} feature={"Desi"} />
            </div>
        </>
    );
}

export default Dynamic;