function Prac1({ name, color }) {
    let styles = { color: color }
    return (
        <>
            <h3 style={styles} >Hello! {name}</h3>
        </>
    );
}

function Prac1Tab() {
    return (
        <>
            <Prac1 name={"Jay"} color={"pink"} />
        </>
    );
}

export default Prac1Tab;