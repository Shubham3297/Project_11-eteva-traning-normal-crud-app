import React from 'react'

const heading = {
    fontSize: "72px",
    color: 'blue'
}

function Inlinecss() {
    return (
        <div>
            <h2 style={heading}>Inline</h2>
            <h1 className='error'>Error</h1>
        </div>
    )
}

export default Inlinecss
