import React from 'react'
import Aux from '../hoc/HigherOrder'
import SelectBackdrop from './SelectBackdrop'

const SelectModal = (props) => {

    return(
        <Aux>
            <SelectBackdrop
                show={props.isAreaSelected}
                clicked={props.clicked}
               >
               </SelectBackdrop>
            <div className='Modal'
                style={{
                   // transform: props.isAreaSelected ? 'translateY(-20vh)' : 'translateY(-100vh)',
                   // opacity: props.isAreaSelected ? '1' : '0',
                }}>
                {props.children}
            </div>
        </Aux>
    )
}

export default SelectModal;