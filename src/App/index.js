import React, { Component } from 'react';
import './App.css';

import Settings from '../Settings';
import ApplyLayout from './AppLayout'
import AppBar from './AppBar'

import {AppProvider} from './AppProvider'

class App extends Component {
  render() {
    return (
      <ApplyLayout>
        <AppProvider>
          <AppBar />
          <Settings />
        </AppProvider>
      </ApplyLayout>
    );
  }
}

export default App;
