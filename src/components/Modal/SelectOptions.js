import React from 'react'
import Aux from '../hoc/HigherOrder'
import { Row, Col } from 'react-bootstrap'


const SelectOptions = (props) => {

    const options = {
        Restaurants: {
            Absu: ['AbsuRes1', 'AbsuRes2'],
            Uturu: ['UturuRes1', 'UturuRes2'],
            Okigwe: ['OkigweRes1', 'OkigweRes2'],
            Isuochi: ['IsuochiRes1', 'IsuochiRes2'],
            Isukwuato: ['IsukwuatoRes1', 'IsukwuatoRes2']
        },
        SuperMarkets: {
            Absu: ['AbsuMarket1', 'AbsuMarket2'],
            Uturu: ['UturuMarket1', 'UturuMarket2'],
            Okigwe: ['OkigweMarket1', 'OkigweMarket2'],
            Isuochi: ['IsuochiMarket1', 'IsuochiMarket2'],
            Isukwuato: ['IsukwuatoMarket1', 'IsukwuatoMarket2']
        },
        Pharmacies: {
            Absu: ['AbsuRes1', 'AbsuRes2'],
            Uturu: ['UturuRes1', 'UturuRes2'],
            Okigwe: ['OkigweRes1', 'OkigweRes2'],
            Isuochi: ['IsuochiRes1', 'IsuochiRes2'],
            Isukwuato: ['IsukwuatoRes1', 'IsukwuatoRes2']
        },
        restaurants: {
            Absu: ['AbsuRes1', 'AbsuRes2'],
            Uturu: ['UturuRes1', 'UturuRes2'],
            Okigwe: ['OkigweRes1', 'OkigweRes2'],
            Isuochi: ['IsuochiRes1', 'IsuochiRes2'],
            Isukwuato: ['IsukwuatoRes1', 'IsukwuatoRes2']
        },
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