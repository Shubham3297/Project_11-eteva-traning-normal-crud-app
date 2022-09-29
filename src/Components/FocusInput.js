import React, { Component, createRef } from 'react'
import InputRef from './InputRef'

class FocusInput extends Component {
    constructor(props) {
        super(props)

        this.componentRef = createRef()
    }

    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <InputRef ref={this.componentRef} />
                <button type="button" onClick={this.clickHandler} >Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
