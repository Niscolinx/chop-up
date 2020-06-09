import React from 'react';

const ModalToggle = (props) => (
    <div onClick={props.clicked} className='modalToggle'>
        <i class="fa fa-shopping-basket" aria-hidden="true"></i>

        &times;
    </div>
)

export default ModalToggle;