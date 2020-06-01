import React from 'react';

const button = (props) => (
    <button className = {['orderbutton', props.btnType].join(' ')} id='sign-in-button'
    onClick = {props.clicked}>
        {props.children}
    </button>
)

export default button;