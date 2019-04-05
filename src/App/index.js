import React, { Component } from 'react';
import './App.css';

import Welcome from './WelcomeMessage';
import ApplyLayout from './AppLayout'
import AppBar from './AppBar'

import {AppProvider} from './AppProvider'

class App extends Component {
  render() {
    return (
      <ApplyLayout>
        <AppProvider>
          <AppBar />
          <Welcome name={"Welcome to CryptoDash"} />
        </AppProvider>
      </ApplyLayout>
    );
  }
}

export default App;
