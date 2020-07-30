import React from "react"

const Entertainer = (props) => {
    return(
        <div>
            <div>이름 : {props.name}</div>
            <div>직업 : {props.job}</div>
            <img src={props.image} alt={props.name}></img>
        </div>
    )
}

export default Entertainer