import React, { Component } from 'react';
import Search from './components/layout/Search';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/').then(res => console.log(res.data))
  }
  render() {
    return (
      <div className="App">
        <div className="container"> 
          <Search />
        </div>
        <div className="container"> 
          <Users />
        </div>
      </div>
   
    );
  }
}

export default App;
