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
                    discription='Food you love' 
                    />
                <OptionsMap title='SuperMarkets'
                    discription='Food you love' 
                    />

            </Row>
            <Row className='services-box'>

                <OptionsMap title='Pharmacies'
                    discription='Food you love'
                />
                <OptionsMap title='Shopping'
                    discription='Food you love, from restaurants near you'
                />

            </Row>

        </Aux>
    )
}


export default SelectOptions;