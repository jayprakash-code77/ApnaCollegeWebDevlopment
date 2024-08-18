import "./Product.css";
function Product({ title, price= 1 }) { //use destructuring to extract specific props:  // props is similar to Arguments. props is an object. We can write in this way also "function Product(props) { }; (This is not the destructuring)"
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
        </div>
    );
}
export default Product;