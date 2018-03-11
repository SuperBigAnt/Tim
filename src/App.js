import React, { Component } from 'react';
import './App.css';
import Home from './container/Home/Home'
import Login from './container/Login/Login'
import SignUp from './container/SignUp/SignUp'

class App extends Component {
  render() {
    return (
      <div className="App">

        <SignUp/>

      </div>
    );
  }
}

export default App;
