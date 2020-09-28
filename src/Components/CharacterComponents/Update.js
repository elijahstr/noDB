import React, { Component } from 'react'

export default class Update extends Component {
    constructor() {
        super();
        this.state = {
            attack: 0,
            defense: 0,
            special: 0,
            force: 0,
            isUpdating: false,
        }
    }

    changeAttack = (e) => {
        this.setState({attack: e.target.value});
        console.log(this.state.attack);
        
    }

    changeDefense = (e) => {
        this.setState({defense: e.target.value});
    
    }

    changeSpecial = (e) => {
        this.setState({special: e.target.value});
    }

    changeForce = (e) => {
        this.setState({force: e.target.value});
        console.log()
    }

    theUpdate = () => {
        if(this.state.isUpdating===false){
            this.setState({isUpdating: true})
        }
        else{
            this.setState({isUpdating: false})
        }
    }

    completeUpdate = (id) =>{
        this.props.updateFN(id, this.state.attack, this.state.defense, this.state.special, this.state.force);
        this.theUpdate();
    }

    
    
    render() {
        return (
            <div>
                {this.state.isUpdating ? (
                <section>
                    <input onChange={this.changeAttack} placeholder="Attack Stat"></input>
                    <input onChange={this.changeDefense} placeholder="Defense Stat"></input>
                    <input onChange={this.changeSpecial} placeholder="Special Stat"></input>
                    <input onChange={this.changeForce} placeholder="Force Stat"></input>
                    <button onClick={() => this.completeUpdate(this.props.id)}>Update</button>
                </section>
                
                ):
                (
                <section>
                    <button onClick={this.theUpdate}>Update Stats</button>
                </section>
                
                )}
                
                


            </div>
        )
    }
}
