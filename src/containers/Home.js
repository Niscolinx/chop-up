import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import imgUrl from '../assets/images/background_home.jpg'



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
        return (
            <div style={divStyle}>
                <Container fliuid className='hero'>
                    <Row>

                        <Col className='hero_heading'>
                            <h1 className='hero_heading--main'>Everything you need,</h1>
                            <h1 className='hero_heading--span'>delivered within minutes</h1>
                        </Col>

                        <>
                        </>
                    </Row>
                            <h3>Delivering to</h3>
                            <Form className='hero_form'>
                        <Form.Group>
                            <Form.Label>Custom select Small</Form.Label>
                            <Form.Control as="select" size="lg" custom className='hero_form--control'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Custom select Large</Form.Label>
                            <Form.Control as="select" size="lg" custom className='hero_form--control' value="choose area">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>

                    
                    </Form>
                    <>
                    <h1>Restaurant</h1>
                    <h1>Restaurant</h1>
                    <h1>Groceries</h1>
                    <h1>Restaurants</h1>
                    </>
                </Container>
            </div>
        )
    }
}


export default Home