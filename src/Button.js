import React from 'react';


export default function Button(props) {
    return <button onClick={() => props.move(props.f)}>{props.label}</button>;
}

