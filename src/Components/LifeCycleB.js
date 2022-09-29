import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Shubham"
        }
        console.log("LifecycleB Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDerivedStateFromProps");
        return null
    }

    componentDidMount() {
        console.log("LifeCycleB componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate");
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifecycleB componentDidUpdate")
    }
    render() {
        console.log("LifecycleB render");
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifeCycleB;
