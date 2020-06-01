import React from 'react'
import Aux from '../hoc/HigherOrder'
import { Row, Col } from 'react-bootstrap'
import { OptionsMap } from './OptionsList'


const SelectOptions = () => {

    return (

        <Aux>

            <Row>

                <h5 className='services_heading'>Select Service</h5>
            </Row>
            <Row className='services-box'>

                <OptionsMap title='Restaurants'
                    discription='Food you love, near restaurants near you' 
                    />
                <OptionsMap title='SuperMarkets'
                    discription='Things you love, from supermarkets near you' 
                    />

            </Row>
            <Row className='services-box'>

                <OptionsMap title='Pharmacies'
                    discription='Top Quality medicines near you'
                />
                <OptionsMap title='Shopping'
                    discription='Purchase the most stylish, affortabel and quality products near you'
                />

            </Row>

        </Aux>
    )
}


export default SelectOptions;