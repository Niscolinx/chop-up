import React from 'react'
import Aux from '../hoc/HigherOrder'
import SelectBackdrop from './SelectBackdrop'
import ModalDrawerToggle from '../Layout/Navigation/ModalDrawerToggle'

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
                    <ModalDrawerToggle/>
                {props.children}
            </div>
        </Aux>
    )
}

export default SelectModal;