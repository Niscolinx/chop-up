import React from 'react';

console.log('this is the backdrop')
const backdrop = (props) => (
    props.show? <div className = 'backdrop' onClick = {props.clicked}></div>: null
)

export default backdrop;