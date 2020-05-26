import React from 'react';

const SelectBackdrop = (props) => (
    props.show ? <div className='selectBackdrop' onClick={props.clicked}></div> : null

)

export default SelectBackdrop;