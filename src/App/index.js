import React, { Component } from 'react';
import './App.css';
import Welcome from './WelcomeMessage';
import styled, { css, Button } from 'styled-components';

const MyButton = styled.div` 
  color: Tomato;
  ${props => props.primary && css`
    color: palevioletred;
  `}
`
const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Welcome name={"Welcome CryptoDash"} />
        
      </div>
    );
  }
}

export default App;
