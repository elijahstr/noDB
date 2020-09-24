import React, { Component } from 'react'
import Character from './Character'

export default class Body extends Component {
    constructor() {
        super();
        this.state = {
            char1id: 0,
            char2id: 0,
        }
    }

    render() {
        return (
            <div>
                <section>
                   <Character /> 
                </section>
            </div>
        )
    }
}
