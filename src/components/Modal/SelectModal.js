import React from 'react'
import Aux from '../hoc/HigherOrder'
import Backdrop from './Backdrop'

const SelectModal = (props) => {

    return(
        <Aux>
            <Backdrop
                show={this.props.orderSummary}
                clicked={this.props.clicked}></Backdrop>
            <div className='Modal'
                style={{
                    transform: this.props.orderSummary ? 'translateY(-20vh)' : 'translateY(-100vh)',
                    opacity: this.props.orderSummary ? '1' : '0'
                }}>
                {this.props.children}
            </div>
        </Aux>
    )
}

export default SelectModal;