import React, { useState } from 'react'

function HooksUseState() {

    const [count, setCount] = useState(100)
    return (
        <div>
            <h1>Hooks useState in functional comonent{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
        </div>
    )
}

export default HooksUseState
