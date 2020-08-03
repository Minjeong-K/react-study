import React, {Component} from "react";
import './App.css'

export default class App extends Component{
  state = {
    num:0,
    text:"",
  }

  increase = () => {
    this.setState({
      num:this.state.num+1,
    },
    this.multiple
    );
  };
  
  multiple = () => {
    this.state.num%5===0 ? setTimeout(() => {
      this.setState({text : " 5의 배수가 맞습니다."})
    }, 3000) : this.setState({
      text : " 5의 배수가 아닙니다."
    })
  }

  render(){
    const {num, text} = this.state;
    return(
      <div>
        <div>{num}</div>
        <div>{text}</div>
        <button onClick={this.increase}>+++</button>
      </div>
    )
  }
}