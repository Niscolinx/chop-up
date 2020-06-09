import React from 'react';

const ModalToggle = (props) => (
    <div onClick={props.clicked} className='modalToggle'>
        &times;
        {/* <span className='modalToggle_item1'></span>
        <span className='modalToggle_item2'></span> */}
    </div>
)

export default ModalToggle;