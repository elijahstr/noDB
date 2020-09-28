import React, { Component } from 'react'
import Image from "./CharacterComponents/Image";
import Attribute from "./CharacterComponents/Attribute";

export default class Character extends Component {
    constructor() {
        super();
        this.state ={
            id: 0,
        }
    }
    
    
    render() {
        return (
            <div>
                {/* {console.log(this.props.theChar) + "Character.js"} */}
                <section>
                <Image imgSrc={this.props.theChar.image} alt={this.props.theChar.name}/>
                <Attribute updateFN={this.props.updateFN} destroyFN={this.props.destroyFN} id={this.props.theChar.id} attack={this.props.theChar.attack} defense={this.props.theChar.defense} special={this.props.theChar.special} force={this.props.theChar.force}/>
                </section>
            </div>
        )
    }
}
