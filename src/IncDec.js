import React from 'react';
import { Store } from './Comonad';


export default function IncDec(props) {
    console.log(JSON.stringify(props));
    return (
      <div className="inc-dec">
        <button onClick={props.inc}>+</button>
        <span>{props.n}</span>
        <button onClick={props.dec}>-</button>
      </div>
    );
}

