import React from 'react';


export default function Button(props) {
    return <button onClick={() => props.update(props.f)}>{props.label}</button>;
}

