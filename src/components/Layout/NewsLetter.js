import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//import Form from 'react-bootstrap/Form'
import Input from './Input'
import Button from '../Modal/Button'

class NewsLetter extends Component {

    state = {
        control: {
            cities: {
                elementType: 'select',
                config: {
                    options: [
                        { value: 'Absu', displayValue: 'Absu' },
                        { value: 'Okigwe', displayValue: 'Okigwe' },
                        { value: 'Isukwuato', displayValue: 'Isukwuato' },
                    ]
                },
                value: 'Please choose your city',
                validation: {},
                class: 'newsLetter-cities',
                isTouched: false
            },

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
                class: 'newsLetter-email',
                isTouched: false
            }

        }
    }

    checkValidity(value, rules) {
        let isValid = true
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        return isValid
    }
    nameHandler = (e, id) => {
        const updatedOrderForm = {
            ...this.state.control,
            [id]: {
                ...this.state.control[id],
                value: e.target.value,
                valid: this.checkValidity(e.target.value, this.state.control[id].validation),
                isTouched: true,

            },
        }
        this.setState({
            control: updatedOrderForm
        })

    }
    loginButton = (e) => {
        e.preventDefault()
        // console.log(this.state.control.email.value, this.state.control.password.value, this.state.isLogin)
    }

    render() {




        let elementTypeArr = []
        for (let key in this.state.control) {
            elementTypeArr.push({
                id: key,
                config: this.state.control[key]
            })
        }

        let form = <div className='newsLetterForm'>
            {elementTypeArr.map(elementType => {
                return <Input
                    isTouched={elementType.config.isTouched}
                    validateClass={elementType.config.class}
                    key={elementType.id}
                    config={elementType.config.config}
                    inputtype={elementType.config.elementType}
                    value={elementType.config.value}
                    changed={(e) => this.nameHandler(e, elementType.id)}
                />
                
            })}
            <Button>submit</Button>

        </div>

        return (
            <div className='newsLetter'>

                <Container>
                    <div className='newsLetter_heading'>
                        <h1>20% Off on your first order</h1>
                        <h1>by subscribing to our newsletter!</h1>
                    </div>
                    <Row >
                        <Col>
                            <p className="newsLetter_description">Don't miss out on your great offers and Receive deals from out top vendors via e-mail</p>
                        </Col>
                    </Row>

                    <form onSubmit={this.loginButton} className='newsLetter-form'>
                        {form}
                    </form>

                    {/* <Form>


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
                    </Form> */}
                </Container>
            </div>
        )
    }
}

export default NewsLetter;