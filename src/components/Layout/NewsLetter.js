import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

class NewsLetter extends Component {

    state = {
        control: {
            email: {
                elementType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                isTouched: false
            },
            password: {
                elementType: 'input',
                config: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                isTouched: false
            }
        },
    }

    render() {

        const formBtn = (e) => {
            e.preventDefault()

        }
        return (
            <div className='newsletter'>

                <Container>
                    <div className='newsletter_heading'>
                        <h1>20% Off on your first order</h1>
                        <h1>by subscribing to our newsletter!</h1>
                    </div>
                    <Row >
                        <Col>
                            <p className="newsletter_description">Don't miss out on your great offers and Receive deals from out top vendors via e-mail</p>
                        </Col>
                    </Row>

                    <Form>


                        <Form.Row className='newsletter_form'>

                            <Form.Group as={Col} controlId="formGridPassword" className='newsletter_form-item'>
                                <Form.Control as="select">
                                    <option>Absu</option>
                                    <option>2</option>
                                    <option>3</option>

                                </Form.Control>
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridEmail" className='newsletter_form-item'>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail" className='newsletter_form-item'>
                                <Button type="submit" className='newsletter_form-submitBtn' onClick={formBtn}>
                                    subscribe to Newsletter
                                </Button>
                            </Form.Group>

                            <Button type="submit" className='newsletter_form-submitBtn' onClick={formBtn}>
                                subscribe to Newsletter
                                </Button>




                        </Form.Row>
                        <Form.Group controlId="formBasicCheckbox" className='newsletter_description'>
                            <Form.Check type="checkbox" label="I have read and accepted the terms and conditions and privacy policy" />
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default NewsLetter;