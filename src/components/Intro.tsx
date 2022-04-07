import React from 'react';

const Intro = () => {

    let name: string = "Tim";
    name = "Bob";
    name = 7;

    return (
        <div style={{ border: "1px solid black", width: "50vw" }}>
            <h1>Intro Component</h1>
            <h3>Hi, {name}</h3>
            <p>Name is displayed with reassigned value, but error is shown in code</p>
        </div>

    )
}

export default Intro;