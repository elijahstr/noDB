import React, { Component } from 'react'

export default class Destroy extends Component {
        
    render() {
        return (
            <div>
                <button onClick={() => this.props.destroyFN(this.props.id)}>Destroy Character</button>
            </div>
        )
    }
}
