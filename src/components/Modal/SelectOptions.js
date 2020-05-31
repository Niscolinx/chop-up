import React from 'react'
import Aux from '../hoc/HigherOrder'
import { Row, Col } from 'react-bootstrap'


const SelectOptions = (props) => {

    const options = {
        restaurants: {
            Absu: ['AbsuRes1', 'AbsuRes2'],
            Uturu: ['UturuRes1', 'UturuRes2'],
            Okigwe: ['OkigweRes1', 'OkigweRes2'],
            Isuochi: [],
            Isukwuato: []
        }
    }

    return (

        <Aux>

            <Row>

                <h5 className='services_heading'>Select Service</h5>
            </Row>
            <Row className='services-box'>

                <Col className='services-box_item'>
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