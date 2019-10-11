import React, { Component } from 'react';
import Search from './components/layout/Search';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  render() {
    return (
    
      <div className="App">
        <Search />
        <Users />
      </div>
   
    );
  }
}

export default App;
