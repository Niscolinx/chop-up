import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import imgUrl from '../assets/images/background_home.jpg'
//import FormInput from '../components/Layout/DeliveringForm/FormInput'
import * as locations from '../components/Layout/DeliveringForm/Locations'


class Home extends Component {

    state = {

    }

    render() {
        const divStyle = {
            backgroundImage: 'url(' + imgUrl + ')',
            width: '100%',
            height: '95vh',
            backgroundSize: 'cover',
        };



        const FormInput = locations.areas.map(item => {
            let lower = item.toLowerCase()
            let upper = item.charAt(0).toUpperCase() + item.slice(1)
            return <option value={lower}>{upper}</option>

        })


        return (
            <div style={divStyle}>
                <Container fliuid className='hero'>
                    <Row>

                        <Col className='hero_heading'>
                            <h1 className='hero_heading--main'>Everything you need,</h1>
                            <h1 className='hero_heading--span'>delivered within minutes</h1>
                        </Col>

                    </Row>

                    <Row className='delivering'>
                        <h3 className='delivering_text'>Delivering to</h3>
                        <Form className='delivering_form'>
                            <Form.Group>
                                <Form.Control as="select" size="lg" custom className='delivering_form--control'>
                                    <option value="" disabled selected hidden className='delivering_form--control-placeholder'>Choose your city</option>

                                    {formInput}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control as="select" size="lg" custom className='delivering_form--control'>
                                    <option value="" disabled selected hidden className='delivering_form--control-placeholder'>Select your area</option>

                                    {FormInput}
                                </Form.Control>
                            </Form.Group>


                        </Form>
                    </Row>

                    {/* <>
                    <h1>Restaurant</h1>
                    <h1>Restaurant</h1>
                    <h1>Groceries</h1>
                    <h1>Restaurants</h1> 
                    </>*/}
                </Container>
            </div>
        )
    }
}


export default Home