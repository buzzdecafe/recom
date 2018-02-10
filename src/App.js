import React, { Component } from 'react';
import './App.css';

import Top from './Top';
import Bottom from './Bottom';

// Store (s -> a) s
// where `s` is State and `a` is DOM)

// Store (s -> a) s
// where `s` is ??? and `a` ia a Component (i.e. State -> DOM)


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>How do I use comonad to compose UIs?</h1>

        <Top />

        <hr />

        <Bottom />
      </div>
    );
  }
}

export default App;
