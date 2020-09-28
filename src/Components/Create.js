import React, { Component } from 'react'
import "../CSS/create.css"

export default class Create extends Component {
    constructor(){
        super();
        this.state ={
            name: "",
            url: "",
            attack: 0,
            defense: 0,
            special: 0,
            force: 0,
            array: []
        }
    }

    changeName = (e) => {
        this.setState({name: e.target.value});
        
    }

    changeUrl = (e) => {
        this.setState({url: e.target.value});
        console.log(this.state.url);
        
    }

    changeAttack = (e) => {
        this.setState({attack: e.target.value});
        
    }

    changeDefense = (e) => {
        this.setState({defense: e.target.value});
    
    }

    changeSpecial = (e) => {
        this.setState({special: e.target.value});
    }

    changeForce = (e) => {
        this.setState({force: e.target.value});
    }

    

    
    
    render() {
        return (
            <div className="create">
                <h2>CREATE YOUR CHARACTER</h2>
                <br></br>
                <section className="input-fields">
                    <input onChange={this.changeName} placeholder="Name"></input>
                    <input onChange={this.changeUrl} placeholder="Image URL"></input>
                    <input onChange={this.changeAttack} placeholder="Attack"></input>
                    <input onChange={this.changeDefense} placeholder="Defense"></input>
                    <input onChange={this.changeSpecial} placeholder="Special"></input>
                    <input onChange={this.changeForce} placeholder="Force"></input>
                    <button onClick={()=>this.props.createFN(this.state.name, this.state.url, this.state.attack, this.state.defense, this.state.special, this.state.force)}>Submit</button>
                </section>
            </div>
        )
    }
}
