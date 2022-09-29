import React, { useEffect, useState } from 'react'

function HooksUseCallbackChild(getItems) {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(getItems)
    }, [getItems])
    return (
        <div>
            {items && items.map(item => {
                <div key={item}>{item}</div>
            })}
        </div>
    )
}

export default HooksUseCallbackChild
