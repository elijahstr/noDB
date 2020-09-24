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
      characters: [],

    }
  }

  getCharacter(id){
    axios.get(`/api/characters`)
    .then(res => {
      this.setState({characters: res.data})
    })
    .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Body characterArray={this.state.characters}/>
        <Create />
      </div>
    )
  }
}

