import React from 'react'
import Aux from '../hoc/HigherOrder'
import { Row, Col } from 'react-bootstrap'


const SelectOptions = (props) => {

    return (

        <Aux>

            <Row>

                <h5 className='services_heading'>Select Service</h5>
            </Row>
            <Row className='services-box'>

                <Col className='services-box_item' onClick={optionClicked}>
                    <h5 className='services-box_title'>Restaurants</h5>
                    <p className='services-box_description'>Food you love, from restaurants near you</p>
                </Col>
                <Col className='services-box_item'>
                    <h5 className='services-box_title'>SuperMarkets</h5>
                    <p className='services-box_description'>Food you love, from restaurants near you</p>
                </Col>

            </Row>
            <Row className='services-box'>

                <Col className='services-box_item'>
                    <h5 className='services-box_title'>Pharmacies</h5>
                    <p className='services-box_description'>Food you love, from restaurants near you</p>
                </Col>
                <Col className='services-box_item'>
                    <h5 className='services-box_title'>Shopping</h5>
                    <p className='services-box_description'>Food you love, from restaurants near you</p>
                </Col>

            </Row>

        </Aux>
    )
}


export default SelectOptions;