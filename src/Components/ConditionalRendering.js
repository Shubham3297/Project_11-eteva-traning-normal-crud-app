import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // 4th method short circuit operator
        return this.state.isLoggedIn && (<div>Wellcome Shubham</div>)

        // 3rd method ternary conditional operator
        // return this.state.isLoggedIn ? (<div>Wellcome Shubham</div>) : (<div>Welcome Guest</div>)

        // 2nd method element variable
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Shubham</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // 1st method if-else
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Shubham</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         <div>Welcome Shubham</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default ConditionalRendering
