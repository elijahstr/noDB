import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
import Create from './Components/Create';
import axios from 'axios';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      array: [],
      char1: {},
      char2: {}
    }
  }

  getAllCharacters = () => {
    axios.get('/api/characters')
    .then(res => {
        this.setState({array: res.data});
       
    })
    .catch(err => console.log(err))
}

  getCharacter = (id) => {
    axios.get(`/api/character/${id}`)
    .then(res => {
        this.setState({char1: res.data})
    })
    .catch(err => console.log(err))
  }

  getCharacter2 = (id) => {
    axios.get(`/api/character/${id}`)
    .then(res => {
        this.setState({char2: res.data})
    })
    .catch(err => console.log(err))
  }

  updateStats = (id, attack, defense, special, force) => {
    axios.put(`/api/character/${id}`, {
        attack: attack,
        defense: defense,
        special: special,
        force: force
    })
    .then(res=>{
        this.setState({array: res.data})
        console.log(this.state.array);
    })
    .catch(err => console.log(err))
  }
  
  destroyCharacter = (id) => {
    axios.delete(`/api/character/${id}`)
    .then(res => {
      this.setState({array:res.data})
      console.log(this.state.array);
    })
    .catch(err => console.log(err))
  }

  addCharacter = (name, url, attack, defense, special, force) => {
    axios.post('/api/character',  {
         id : 0,
         name: name,
         image: url,
         attack: attack,
         defense: defense,
         special: special,
         force: force
     })
     .then(res=>{
         this.setState({array: res.data})
         console.log(this.state.array);
     })
     .catch(err => console.log(err))
 }

  componentDidMount(){
    this.getAllCharacters();
  }

  componentDidUpdate(){
    this.getAllCharacters();
  }

  
  render() {
    return (
      <div className="App">
        <Header />
        <Body 
        char1={this.state.char1}
        char2={this.state.char2}
        getChar1={this.getCharacter} 
        getChar2={this.getCharacter2} 
        updateFN={this.updateStats} 
        destroyFN={this.destroyCharacter} 
        charArr={this.state.array}/>
        <Create createFN={this.addCharacter}/>
      </div>
    )
  }
}

