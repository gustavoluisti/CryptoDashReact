import React, { Component } from 'react';
import './App.css';

import Welcome from './WelcomeMessage';
import ApplyLayout from './AppLayout'
import AppBar from './AppBar'

class App extends Component {
  render() {
    return (
      <ApplyLayout>
        <AppBar />
        <Welcome name={"Welcome to CryptoDash"} />
        
      </ApplyLayout>
    );
  }
}

export default App;
