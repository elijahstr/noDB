import React from 'react'
function SelectButton(props){
    return (
        <div className="one-button">
             <button onClick={()=>props.getChar(props.character.id)}>{props.character.name}</button>
        </div>
    )
}

export default SelectButton;


// import React, { Component } from 'react'

// export default class SelectButton extends Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={()=>this.props.getChar(this.props.character.id)}>{this.props.character.name}</button>
//             </div>
//         )
//     }
// }
