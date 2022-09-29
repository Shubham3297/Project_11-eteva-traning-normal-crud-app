import React from "react";
import { Component } from "react/cjs/react.production.min";

class Welcome extends Component {

    render() {
        const { name, heroName } = this.props;
        // const { state1, state2 } = this.state;
        return <h1>Welcome, {name} , {heroName}</h1>
    }
}

export default Welcome;