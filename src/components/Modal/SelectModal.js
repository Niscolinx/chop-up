import React from 'react'
import Aux from '../hoc/HigherOrder'
import Backdrop from './Backdrop'

const SelectModal = (props) => {

    return(
        <Aux>
            <Backdrop
                show={props.isAreaSelected}
                clicked={props.clicked}
               >
               </Backdrop>
            <div className='Modal'
                style={{
                    transform: props.isAreaSelected ? 'translateY(-20vh)' : 'translateY(-100vh)',
                    opacity: props.isAreaSelected ? '1' : '0',
                }}>
                {props.children}
            </div>
        </Aux>
    )
}

export default SelectModal;