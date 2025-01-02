import "./practice2.css";
function DiscriptionCompo({ Name, featuresArr }) {
    const list = featuresArr.map((feature) => <p>{feature}</p>);
    return (
        <>
            <div className="discrip">
                <h3>{Name}</h3>
                {list}
            </div>
        </>
    );

}

function PriceCompo({ oldPrice, newPrice }) {
    const formattedoldPrice = oldPrice.toLocaleString(); // "62,321"
    const formattednewPrice = newPrice.toLocaleString(); // "62,321"

    return (
        <>
            <div className="price">
                <sup>₹</sup>&nbsp;<span id="oldPrice">{formattedoldPrice}</span> &nbsp;&nbsp;<sup>₹</sup>&nbsp;<span id="newPrice">{formattednewPrice}</span>
            </div>
        </>
    );
}


function Product({ name, featureArray, oldPrice, newPrice }) {
    return (
        <>

            <div className="product">
                <DiscriptionCompo Name={name} featuresArr={featureArray} />
                <PriceCompo oldPrice={oldPrice} newPrice={newPrice} />
            </div>
        </>
    );
}


function Prac2Tab() {
    let featureData = ["8000 DPI", "5 Programmable Buttons"];
    return (
        <>
            <div className="product-container">
                <Product name={"Logitech MX Master"} featureArray={featureData} oldPrice={9073} newPrice={4500} />
                <Product name={"Samsung Galaxy S21"} featureArray={featureData} oldPrice={69999} newPrice={54999} />
                <Product name={"Sony WH-1000XM4"} featureArray={featureData} oldPrice={29990} newPrice={24990} />
                <Product name={"Dell XPS 13"} featureArray={featureData} oldPrice={119990} newPrice={99990} />
                <Product name={"GoPro HERO10 Black"} featureArray={featureData} oldPrice={49999} newPrice={39999} />
                <Product name={"Bose QuietComfort 35 II"} featureArray={featureData} oldPrice={29990} newPrice={22990} />
                <Product name={"Fitbit Charge 5"} featureArray={featureData} oldPrice={14900} newPrice={11900} />
            </div>
        </>
    );
}

function Prac2MainTab() {
    return (
        <>
            <Prac2Tab />
        </>
    );
}


export default Prac2MainTab;