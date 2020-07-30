import React, {Component} from "react"

export default class App extends Component{
  state={
    hello: <div>안녕?</div>,
  }
  press=()=>{
    this.setState({
      hello : <div><div>안녕?</div><div>반가워 리액트!</div></div>
    })
  }
  render(){
    return(
      <div>
        {this.state.hello}
        <button onClick={this.press}>Press Me!</button>
      </div>
    )
  }
}