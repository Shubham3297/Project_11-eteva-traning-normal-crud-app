import React from "react";
import { Component } from "react/cjs/react.production.min";

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Welcome Visitor"
        }
    }

    // changeMessage() {
    //     this.setState({
    //         message: "Thank You For Subcribing"
    //     })
    // }

    changeMessage = () => {
        this.setState({
            message: "Thank You For Subcribing"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={() => this.changeMessage()}>Subcribe</button> */}
                <button type="button" onClick={this.changeMessage}>Subcribe</button>
            </div>
        )
    }
}

export default Message;