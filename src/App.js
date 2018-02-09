import React, { Component } from 'react';
import './App.css';
//import { Store } from './Comonad';
//import IncDec from './IncDec';
import Button from './Button';
import StoreMaker from './StoreMaker';
import IncDec from './IncDec';

// Store (s -> a) s
// where `s` is State and `a` is DOM)

// Store (s -> a) s
// where `s` is ??? and `a` ia a Component (i.e. State -> DOM)
const ButtonMaker = StoreMaker(Button);
const Plus1 = ButtonMaker({f: n => n + 1, label: '+'});
const Minus1 = ButtonMaker({f: n => n - 1, label: '-'});

class App extends Component {
  constructor() {
    super();
    this.state = {n: 0};
  }

  update(f) {
    this.setState({n: f(this.state.n)})
  }

  render() {
    return (
      <div className="App">
        <div>
          <Plus1 update={this.update.bind(this)} />
          {this.state.n}
          <Minus1 update={this.update.bind(this)} />
        </div>

        <div>
          <IncDec n={this.state.n}
                  inc={() => this.update(n => n + 1)}
                  dec={() => this.update(n => n - 1)}
          />
        </div>

      </div>
    );
  }
}

export default App;
