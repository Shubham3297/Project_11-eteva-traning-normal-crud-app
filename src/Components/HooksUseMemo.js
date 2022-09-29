import React, { useState, useMemo } from 'react'

function HooksUseMemo() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    const memoMultiCount = useMemo(function multiCount() {
        console.warn("multicount");
        return count * 5;
    }, [count])
    return (
        <div>
            <h1>useMemo hooks in react</h1>
            <h2>Count:{count}</h2>
            <h2>Item:{item}</h2>
            <h2>{memoMultiCount}</h2>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <button onClick={() => setItem(item * 10)}>Update Item</button>
        </div>
    )
}

export default HooksUseMemo
