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
            <div className='Modals'
                style={{
                    transform: props.isAreaSelected ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.isAreaSelected ? '1' : '0',
                }}>
                {props.children}
            </div>
        </Aux>
    )
}

export default SelectModal;