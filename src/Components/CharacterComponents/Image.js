import React from 'react'
function Image(props){
    return (
        <div>
             <img src={props.imgSrc} alt={props.alt}></img>
        </div>
    )
}

export default Image;

// export default class Image extends Component {
//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         realImage: false,
//     //     }
//     // }

//     // imageFound = () => {
//     //     if(this.props.imgSrc!==undefined){
//     //         this.setState({realImage: true});
//     //     }
//     // }

//     render() {
//         return (
//             <div>
//                <img src={this.props.imgSrc} alt={this.props.alt}></img>
//             </div>
//         )
//     }
// }
