import React, { forwardRef, useImperativeHandle, useState } from 'react'

const HooksUseImparativHandleChild = forwardRef((props, ref) => {
    const [count, setCount] = useState(0)
    useImperativeHandle(ref, () => ({
        increment
    }))
    function increment() {
        setCount(count + 1)
    }
    return (
        <div>
            {count}
            <button onClick={increment}>Child Click</button>
        </div>
    )
})

export default HooksUseImparativHandleChild
