import React, { Component } from 'react';
import PersonalListContainer from './PersonalListContainer';
import MissedListContainer from './MissedListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonalListContainer />
        <MissedListContainer />
      </div>
    );
  }
}

export default App;
