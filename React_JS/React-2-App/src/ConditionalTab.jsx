// conditionals
import ConditionalFirstWay from "./Conditional.jsx";
import ConditionalSecondWay from "./Conditional.jsx";
import ConditionalThirdWay from "./Conditional.jsx";

// 


function Conditional() {
    let Name = "Jayprakash";
    let Price = 400;
    return (
        <>
            <ConditionalThirdWay name={"Pant"} price={1000} />
            <ConditionalThirdWay name={"Jacket"} price={799} />
            <ConditionalThirdWay name={"T-Sirt"} price={550} />
        </>
    );
};

export default Conditional;