import React from 'react';
import { Plus1, Minus1 } from './PlusMinus';

const toAlpha = n => String.fromCharCode(n < 65 ? 90 : n > 90 ? 65 : n);

export default class extends React.Component {
  constructor() {
    super();
    this.state = {n: 'A'};
  }

  update(f) {
    this.setState({n: toAlpha(f(this.state.n.charCodeAt(0)))});
  }

  render() {
    return <div>
      <Plus1 move={this.update.bind(this)}/>
      {this.state.n}
      <Minus1 move={this.update.bind(this)}/>
    </div>;
  }
}
