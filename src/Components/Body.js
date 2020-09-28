import React, { Component } from 'react'
import Character from './Character'
import SelectButton from './SelectButton'

export default class Body extends Component {
    constructor() {
        super();
        this.state = {
            array: [],
            char1: {},
            char2: {},
            value1: 1,
            value2: 2
        }
        
    }

    

    render() {
        const mappedButtons1 = this.props.charArr.map((character, i) => (
            <SelectButton
                key={i}
                character={character}
                getChar={this.props.getChar1}
                charArr={this.props.charArr}
                />
        ))

        const mappedButtons2 = this.props.charArr.map((character, i) => (
            <SelectButton
                key={i}
                character={character}
                getChar={this.props.getChar2}
                charArr={this.props.charArr}
                />
        ))

        return (
            
            <div>
               <section>
                    {mappedButtons1}
                    <Character theChar={this.props.char1} updateFN={this.props.updateFN} destroyFN={this.props.destroyFN}/> 
                    {mappedButtons2}
                    <Character theChar={this.props.char2} updateFN={this.props.updateFN} destroyFN={this.props.destroyFN}/>
                </section>
            </div>
        )
    }
}





// componentDidMount(){
//     this.getAllCharacters();
// }

// componentDidUpdate(){
//    this.getCharacter(this.state.value); 
// }