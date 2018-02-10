import React from 'react';


export default function IncDec(props) {
    return (
      <div className="inc-dec">
        <button onClick={props.inc}>+</button>
        <span>{props.n}</span>
        <button onClick={props.dec}>-</button>
      </div>
    );
}

