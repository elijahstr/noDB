import React, { Component } from 'react'
import Update from './Update'
import Destroy from './Destroy'


export default class Attribute extends Component {
    render() {
        return (
            <div className="attributes">
                <p>Attack:{this.props.attack} Defense:{this.props.defense} Special:{this.props.special} Force:{this.props.force}</p>
                <Update id={this.props.id} updateFN={this.props.updateFN}/>
                <Destroy id={this.props.id} destroyFN={this.props.destroyFN}/>
            </div>
        )
    }
}
