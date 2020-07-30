import React from "react";   // react 모듈에서 react 가져옴

// < class로 만들기 >
// export default class Name extends Component{
//     render(){
//         return(
//             <div>
//                 {this.props.name}
//             </div>
//         )
//     }
// }

// < 화살표 함수로 만들기 >
const Name = ({name}) => {
    return(
        <div>나의 이름은 {name}</div>
    )
}
export default Name; //export default는 딴 파일에서 쓸 수 있도록 선언해주는거