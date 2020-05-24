import React from 'react'
import { Container, Row, Col, Button, Card, CardGroup } from 'react-bootstrap'


const Steps = () => {

    return (
        <div className= 'simple-steps'>
            <Container>
                <Row className='simple-steps_header'>
                    <h2 className='simple-steps_header--title'>Simple Steps</h2>
                </Row>

                <Row className='simple-steps_box'>
                    <div>
                    <Col>
                        <h5 className='simple-steps_title'>Set delivering location</h5>
                        <p className='simple-steps_description'>Browse shops that deliver near you</p>
                    </Col>
                    <Col>
                        <h5 className='simple-steps_title'>Choose the product</h5>
                        <p className='simple-steps_description'>Browse shops that deliver near you</p>
                    </Col>
                    <Col>
                        <h5 className='simple-steps_title'>Receive it at your doorstep</h5>
                        <p className='simple-steps_description'>Browse shops that deliver near you</p>
                    </Col>

                    </div>


                </Row>
            </Container>
        </div>

    )
}

export default Steps
