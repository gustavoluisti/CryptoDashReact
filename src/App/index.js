import React, { Component } from 'react';
import './App.css';

import Settings from '../Settings';
import ApplyLayout from './AppLayout'
import AppBar from './AppBar'
import Content from '../Shared/Content'

import {AppProvider} from './AppProvider'

class App extends Component {
  render() {
    return (
      <ApplyLayout>
        <AppProvider>
          <AppBar />
          <Content>
          <Settings />
          </Content>
        </AppProvider>
      </ApplyLayout>
    );
  }
}

export default App;
