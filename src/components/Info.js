import React from "react"

const Info = ({name, age, phone, address}) => {
    return(
        <div>
            <div>이름 : {name} </div>
            <div>나이 : {age} </div>
            <div>번호 : {phone} </div>
            <div>주소 : {address} </div> 
        </div>
        
    )
}
export default Info;

