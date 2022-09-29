import React, { useEffect, useLayoutEffect, useRef } from 'react'

function HooksUseLayoutEffect() {
    let ref = useRef('red')

    useEffect(() => {
        ref.current = 'yellow'
        console.log(ref, "useEffect")
    })

    useLayoutEffect(() => {
        console.log(ref, "useLayoutEffect")
    })
    return (
        <div>

        </div>
    )
}

export default HooksUseLayoutEffect
