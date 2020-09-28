// import React, { Component } from 'react'

// export default class WinLose extends Component {
//     constructor() {
//         super()
//         this.state = {
//             isGreater: true,
//         }
//     }
    
//     sumAndTruth = () => {
//         let sum1 = this.props.char1.attack+this.props.char1.defense+this.props.char1.force+this.props.char1.special;
//         let sum2 = this.props.char2.attack+this.props.char2.defense+this.props.char2.force+this.props.char2.special;

//         if(sum1<sum2){
//             this.setState({isGreater: true})
//         }

//         else{
//             this.setState({isGreater: false})
//         }
//     }
    
    
//     render() {
//         return (
//             <div className="winner-loser">
//                 {this.state.isGreater ? (
//                     <p>"WINNER"</p>) : (<p>"LOSER"</p>)}
//             </div>
//         )
//     }
// }
