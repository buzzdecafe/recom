import React, { Component } from 'react';
import './App.css';
import { Store } from './Comonad';
import IncDec from './IncDec';

const incdec = Store(IncDec)({});


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { n: 0 };
  }

  inc() {
    this.setState({n: this.state.n + 1});
  }

  dec() {
    this.setState({n: this.state.n - 1});
  }

  render() {
    const inc = this.inc.bind(this);
    const dec = this.dec.bind(this);
    const n = this.state.n;

    return (
      <div className="App">
        <div>
          {incdec.move({n, inc, dec}).extract()}
        </div>

      </div>
    );
  }
}

export default App;
