import React, { useRef } from 'react'
import HooksUseImparativHandleChild from './HooksUseImparativHandleChild'

function HooksUseImparativHandleParent() {
    const ref = useRef()
    return (
        <div>
            <HooksUseImparativHandleChild ref={ref}></HooksUseImparativHandleChild>
            <button onClick={() => ref.current.increment()} > Parent Click</button>
        </div >
    )
}

export default HooksUseImparativHandleParent
