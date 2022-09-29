import React, { useRef } from 'react'

function HooksUseRef() {

    const inputRef = useRef(null)
    function handleInput() {
        console.warn("Function Call");
        // inputRef.current.value = "1000";
        // inputRef.current.focus();
        inputRef.current.style.color = "Red";
    }
    return (
        <div>
            <h1>useRef hooks in rect</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleInput}>Handle Input</button>
        </div>
    )
}

export default HooksUseRef
