import React from "react";

// function Greet() {
//     return <h1>Hello, Shubham</h1>
// }

const Greet = ({ name, heroName }) => { //1st method
    // console.log(props);

    // const { name, heroName } = props;  //2nd method
    return (
        <div>
            <h1>Hello, {name} , {heroName}</h1>
            {/* {props.children} */}
        </div>
    )
}

export default Greet;