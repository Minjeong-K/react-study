import React, {Component} from "react";
import './App.css'

export default class App extends Component{
  state = {
    hi:"안녕",
    ispress:true,
  }

  press = () => {
    setTimeout(() => {
      this.setState({
        hi:"반가워",
        ispress:false,
      })
    }, 3000);
  }

  render(){
    const {hi, ispress} = this.state
    return(
      <div>
        <div>{hi}</div>
        {ispress ? <button onClick={this.press}>press me!</button> : <button onClick={this.press} className='App-press-button'>press me!</button>}
      </div>
    );
  }
}