import React from 'react'

function DefaultProps({ fname, lname }) {
    return (
        <div>
            {/* 1st method for defining default props */}
            <h2>My first name is {fname} </h2>
            <h2>My last name is {lname} </h2>

            {/* 2nd method for defining default props */}
            {/* <h2>My first name is {props.fname || "Vasant"}</h2> */}
        </div>
    )
}


DefaultProps.defaultProps = {
    fname: "Shubham",
    lname: "Gaikwad"
}

export default DefaultProps
