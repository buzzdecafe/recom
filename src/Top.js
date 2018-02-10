import React from 'react';
import { Plus1, Minus1 } from './PlusMinus';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {n: 0};
  }

  update(f) {
    this.setState({n: f(this.state.n)})
  }

  render() {
    return <div>
      <Plus1 move={this.update.bind(this)}/>
      {this.state.n}
      <Minus1 move={this.update.bind(this)}/>
    </div>;
  }
}