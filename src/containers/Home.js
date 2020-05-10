import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import imgUrl from '../assets/images/bg_home.jpg'
import * as locations from '../components/Layout/DeliveringForm/Locations'

import CreatableSelect from 'react-select/creatable';
import { colourOptions } from '../doc/data';


class Home extends Component {

    state = {

    }

    handleInputChange = (inputValue: any, actionMeta: any) => {
        console.group('Input Changed');
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };

    handleChange = (newValue: any, actionMeta: any) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };

    render() {
        const divStyle = {
            backgroundImage: 'url(' + imgUrl + ')',
            width: '100%',
            height: '95vh',
            backgroundSize: 'cover',
        };





        const selectCity = locations.cities.map((item, i) => {
            let lower = item.toLowerCase()
            let upper = item.charAt(0).toUpperCase() + item.slice(1)
            return <option value={lower} key={item + i} className='delivering_form--locations_item'>{upper}</option>

        })
        const customStyles = {
            menu: (provided, state) => ({
                ...provided,
                //width: state.selectProps.width,
                borderBottom: '1px dotted pink',
                color: state.selectProps.menuColor,
                padding: 10,

            }),

            option: (styles, state) => ({
                ...styles,
                cursor: 'pointer',
                padding: '1rem'
            }),
            control: (styles) => ({
                ...styles,
                cursor: 'pointer',
            }),


            singleValue: (provided, state) => {
                const opacity = state.isDisabled ? 0.5 : 1;
                const transition = 'opacity 300ms';

                return { ...provided, opacity, transition };
            }
        }


        const selectArea = locations.areas.map((item, i) => {
            let lower = item.toLowerCase()
            let upper = item.charAt(0).toUpperCase() + item.slice(1)

            return <option value={lower} key={item + i} className='delivering_form--locations_item'>{upper}</option>

        })

        const placeholder = 'choose your location'


        return (
            <div>

                <div style={divStyle}>
                    <Container fliuid className='hero'>
                        <div className='delivering'>

                            <Row className="justify-content-md-center">

                                <Col md="auto" className='hero_heading'>
                                    <h1 className='hero_heading--main'>Everything you need,</h1>
                                    <h1 className='hero_heading--span'>delivered within minutes</h1>
                                </Col>

                            </Row>
                            <Row>

                                <h5 className='delivering_title'>Delivering to</h5>
                            </Row>
                            <Row>

                                <Col>
                                    <CreatableSelect
                                        styles={customStyles}
                                        placeholder={placeholder}
                                        isClearable
                                        onChange={this.handleChange}
                                        onInputChange={this.handleInputChange}
                                        options={colourOptions}
                                    />
                                </Col>
                                <Col>
                                    <CreatableSelect
                                        isMulti
                                        isClearable
                                        onChange={this.handleChange}
                                        onInputChange={this.handleInputChange}
                                        options={colourOptions}
                                    />
                                </Col>


                            </Row>
                        </div>

                        <div className='services'>

                            <Row>

                                <h5 className='services_heading'>Select Service</h5>
                            </Row>
                            <Row>

                                <Col>
                                    <h5 className='services_title'>Restaurants</h5>
                                    <p className='services_description'>Food you love, from restaurants near you</p>
                                </Col>
                                <Col>
                                    <h5 className='services_title'>SuperMarkets</h5>
                                    <p className='services_description'>Food you love, from restaurants near you</p>
                                </Col>

                            </Row>
                            <Row>

                                <Col>
                                    <h5 className='services_title'>Pharmacies</h5>
                                    <p className='services_description'>Food you love, from restaurants near you</p>
                                </Col>
                                <Col>
                                    <h5 className='services_title'>Shopping</h5>
                                    <p className='services_description'>Food you love, from restaurants near you</p>
                                </Col>

                            </Row>


                        </div>
                    </Container>
                </div>

                <div className='simple-steps'>
                    <Container>
                        <Row className='simple-steps_header'>
                            <h2 className='simple-steps_header--title'>Simple Steps</h2>
                        </Row>

                        <Row>

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

                        </Row>
                    </Container>
                </div>

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

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Control as="select">
                                        <option>Absu</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Button type="submit" className='newsletter_form-submitBtn'>
                                    subscribe to Newsletter
                                </Button>
                                </Form.Group>


                            </Form.Row>
                            <Form.Group controlId="formBasicCheckbox" className='newsletter_description'>
                                <Form.Check type="checkbox" label="I have read and accepted the terms and conditions and privacy policy" />
                            </Form.Group>
                        </Form>
                    </Container>
                </div>

                <div className='card'>
                    <Container>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
      </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="../assets/images/jellofRice.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="../assets/images/PoundedYam.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
      </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Container>

                </div>
            </div>
        )
    }
}


export default Home
