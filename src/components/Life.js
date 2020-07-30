import React, { Component } from "react"

class Life extends Component {
    state = {
        number: 0,
    }

    constructor(props) {
        super(props)
        console.log("constructor")
    }

    // componentWillMount() {
    //     console.log("componentWillMount (deprecated)")
    // }

    static getDerivedStateFromProps(props, state) {
        if (props !== state) {
            console.log("getDerivedStateFromProps")
            return console.log("{vlaue:props}")
        } else {
            return console.log("null")
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5 의 배수라면 리렌더링 하지 않음
        console.log("shouldComponentUpdate")
        if (nextState.number % 5 === 0) return false
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.value !== prevProps.value) {
            console.log("값이 변경되었습니다.")
        }
        return console.log("componentDidUpdate")
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate")
    // }

    handleIncrease = () => {
        const { number } = this.state
        this.setState({
            number: number + 1,
        })
    }

    handleDecrease = () => {
        this.setState(({ number }) => ({
            number: number - 1,
        }))
    }

    render() {
        console.log("render")
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Life