import React from 'react';

const ModalToggle = (props) => (
    <div onClick={props.clicked} className='modalToggle'>
        <div className='modalToggle_item1'></div>
        <div className='modalToggle_item2'></div>
    </div>
)

export default ModalToggle;