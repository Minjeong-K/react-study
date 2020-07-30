// 복습 ( Day4 )
import React, {Component} from "react"

export default class Counter extends Component{
    state={
        num : 0,
    }

    handleIncrease = () => {
        this.setState({
            num : this.state.num + 1
        })
    }

    handleDecrease = () => {
        this.setState({
            num : this.state.num - 1
        })
    }

    render(){
        return(
            <div>
                <h3>카운터</h3>
                <div>값 : {this.state.num} </div>
                <button onClick={this.handleIncrease}> + </button>
                <button onClick={this.handleDecrease}> - </button>
            </div>
        )
    }
}