import React, { Component } from 'react';
import './App.css';
import Welcome from './WelcomeMessage';
import ApplyLayout from './AppLayout'

class App extends Component {
  render() {
    return (
      <ApplyLayout>
        <Welcome name={"Welcome to CryptoDash"} />
        
      </ApplyLayout>
    );
  }
}

export default App;
