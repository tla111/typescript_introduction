import React from 'react'

const TupleExample = () => {
    type stringAndNumber = [string, number];

    let x: stringAndNumber = ["Hello", 8]
    return (
        <div style={{ border: "1px solid black", width: "50vw" }}>
            <h1>Tuple Example</h1>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {x.map((val) => (
                    <p style={{ marginRight: "20px" }}>{val}</p>
                ))}
            </div>
        </div>
    )
}

export default TupleExample