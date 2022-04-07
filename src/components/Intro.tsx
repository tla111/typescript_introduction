import React from 'react';

const Intro = () => {

    // Implicit Types
    let name1 = "John";
    name1 = 5;

    // Explicit Types
    let name2: string = "Tim";
    name2 = "Bob";
    name2 = 7;

    return (
        <div style={{ border: "1px solid black", width: "50vw" }}>
            <h1>Intro Component</h1>
            <h3>Hi, {name2}</h3>
            <p>Name is displayed with reassigned value, but error is shown in code</p>
        </div>

    )
}

export default Intro;