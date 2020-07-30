import React, {Component} from "react";

const Food = ({name, image}) =>{
  return(
    <div>
      <div>나는 {name}를 좋아해~!</div>
      <img src={image}></img>
    </div>
  )
}

const mjfood=[
  {
  name:"떡볶이", 
  image:"https://funshop.akamaized.net/products/0000067786/vs_image800.jpg"
},
  {
    name:"치킨",
    image:require("./image/food.jpg")
},
]

export default class App extends Component{

  render(){
    return(
      <div>
        {mjfood.map(like=>{
          return <Food name={like.name} image={like.image}></Food>;
        })}
      </div>
    );
  }
}