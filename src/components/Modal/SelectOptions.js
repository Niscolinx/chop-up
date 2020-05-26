import React from 'react'
import Aux from '../hoc/HigherOrder'
import { Row, Col } from 'react-bootstrap'


const SelectOptions = (props) => {

    return (

        <Aux>
            <div className='services'>

                <Row>

                    <h5 className='services_heading'>Select Service</h5>
                </Row>
                <Row className='services-box'>

                    <Col>
                        <h5 className='services-box_title'>Restaurants</h5>
                        <p className='services-box_description'>Food you love, from restaurants near you</p>
                    </Col>
                    <Col>
                        <h5 className='services-box_title'>SuperMarkets</h5>
                        <p className='services-box_description'>Food you love, from restaurants near you</p>
                    </Col>

                </Row>
                <Row className='services-box'>

                    <Col>
                        <h5 className='services-box_title'>Pharmacies</h5>
                        <p className='services-box_description'>Food you love, from restaurants near you</p>
                    </Col>
                    <Col>
                        <h5 className='services-box_title'>Shopping</h5>
                        <p className='services-box_description'>Food you love, from restaurants near you</p>
                    </Col>

                </Row>

            </div>
        </Aux>
    )
}


export default SelectOptions;