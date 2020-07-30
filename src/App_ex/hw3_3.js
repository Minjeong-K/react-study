import React, {Component} from "react"

const studymember = ["한정","은희","민정","희연","지혜","혜림"]

export default class App extends Component{
  
  render(){
    return(
      <div>
        {studymember.map(member=>member+"♥ ")}
      </div>
    )
  }
}