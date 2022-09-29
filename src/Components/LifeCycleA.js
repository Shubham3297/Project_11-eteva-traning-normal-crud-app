import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Shubham"
        }
        console.log("LifecycleA Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps");
        return null
    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate");
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: "codeEvolution"
        })
    }
    render() {
        console.log("LifecycleA render");
        return (
            <div>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA;
