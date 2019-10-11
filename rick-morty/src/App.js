import React, { Component } from 'react';
import Search from './components/layout/Search';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
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
