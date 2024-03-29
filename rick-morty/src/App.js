import React, { Component } from 'react';
import Search from './components/layout/Search';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users : [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://rickandmortyapi.com/api/');

    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className="App">
        <div className="container"> 
          <Search />
        </div>
        <div className="container"> 
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
   
    );
  }
}

export default App;
