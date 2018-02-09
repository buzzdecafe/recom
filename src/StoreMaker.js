import React from 'react';


export default (View) => here => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = here;
    }

    render() { // this is ~Store.extract
      return <View {...this.props} {...this.state} />;
    }
  };
};


