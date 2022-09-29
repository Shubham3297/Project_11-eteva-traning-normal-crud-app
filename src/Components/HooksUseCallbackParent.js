import React, { useCallback, useState } from 'react'
import HooksUseCallbackChild from './HooksUseCallbackChild'

function HooksUseCallbackParent() {
    const [countOne, setCountOne] = useState(0)
    const [counttwo, setCounttwo] = useState(0)
    const getItems = useCallback(() => {
        console.log(counttwo + 1, counttwo - 1)
        return [counttwo + 1, counttwo - 1]
    }, [counttwo])

    return (
        <div>
            <button onClick={() => setCountOne(countOne + 1)}>Count One :{countOne}</button>
            <button onClick={() => setCounttwo(counttwo + 1)}>Count Two :{counttwo}</button>
            <HooksUseCallbackChild getItems={getItems}></HooksUseCallbackChild>
        </div>
    )
}

export default HooksUseCallbackParent
