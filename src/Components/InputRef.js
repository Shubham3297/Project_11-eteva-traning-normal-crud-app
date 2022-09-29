import React, { Component, createRef } from 'react'

class InputRef extends Component {
    constructor(props) {
        super(props)

        this.InputRef = createRef()
    }

    focusInput() {
        this.InputRef.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.InputRef} />
            </div>
        )
    }
}

export default InputRef
