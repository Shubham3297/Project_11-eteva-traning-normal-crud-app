import React, { useEffect, useState } from 'react'

function HooksUseEffect() {

    const [count, setCount] = useState(4)
    useEffect(() => {
        console.warn(count)
        // console.log(count)
    }, [count == 10])
    return (
        <div>
            <h1>Hooks useEffect in functional comonent    {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Update </button>
        </div>
    )
}

export default HooksUseEffect
