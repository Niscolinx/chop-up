import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Row, Col, Button, Card, CardGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import * as actions from '../store/actions/burgerIndex'
import withErrorHandler from "../components/hoc/withErrorHandler"
import axios from "../axios"

import Hero from '../components/Layout/Hero'
import Steps from '../components/Layout/Steps'



class Home extends Component {


    render() {
    

        return (
            <div>

               <Hero
               areas = {this.props.areas}
               onClearedSelectedCity = {this.props.onClearedSelectedCity}
               onSelectedAreas = {this.props.onSelectedAreas}
               onSelectedCity = {this.props.onSelectedCity}
               />

                <Steps/>

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
                                <Card.Img variant="top" src={require('../assets/images/PoundedYam.jpg')} />
                                <Card.Body>
                                    <Card.Title>Smart Bite - Upgate</Card.Title>
                                    <Card.Text>
                                        Min Order N0. Delivering fee N200
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={require('../assets/images/PoundedYam.jpg')} />
                                <Card.Body>
                                    <Card.Title>Smart Bite - Upgate</Card.Title>
                                    <Card.Text>
                                        Min Order N0. Delivering fee N200
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={require('../assets/images/PoundedYam.jpg')} />
                                <Card.Body>
                                    <Card.Title>Smart Bite - Upgate</Card.Title>
                                    <Card.Text>
                                        Min Order N0. Delivering fee N200
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>


                        </CardGroup>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src={require('../assets/images/PoundedYam.jpg')} />
                                <Card.Body>
                                    <Card.Title>Smart Bite - Upgate</Card.Title>
                                    <Card.Text>
                                        Min Order N0. Delivering fee N200
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={require('../assets/images/PoundedYam.jpg')} />
                                <Card.Body>
                                    <Card.Title>Smart Bite - Upgate</Card.Title>
                                    <Card.Text>
                                        Min Order N0. Delivering fee N200
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={require('../assets/images/PoundedYam.jpg')} />
                                <Card.Body>
                                    <Card.Title>Smart Bite - Upgate</Card.Title>
                                    <Card.Text>
                                        Min Order N0. Delivering fee N200
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>


                        </CardGroup>
                    </Container>

                </div>

                <footer className="page-footer font-small indigo footer">

                    <div className="container text-center text-md-left">

                        <div className="row">

                            <div className="col-md-3 mx-auto">

                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4 footer_title">City</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className='footer_link'>Uturu</a>
                                    </li>
                                    <li>
                                        <a href="#!" className='footer_link'>Umuahia</a>
                                    </li>
                                    <li>
                                        <a href="#!" className='footer_link'>Okigwe</a>
                                    </li>

                                </ul>

                            </div>

                            <hr className="clearfix w-100 d-md-none"></hr>

                            <div className="col-md-3 mx-auto">

                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4 footer_title">Stores</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className='footer_link'>Very long link</a>
                                    </li>
                                    <li>
                                        <a href="#!" className='footer_link'>Very long link</a>
                                    </li>
                                    <li>
                                        <a href="#!" className='footer_link'>Very long link</a>
                                    </li>
                                    <li>
                                        <a href="#!" className='footer_link'>Very long link</a>
                                    </li>
                                </ul>

                            </div>

                            <hr className="clearfix w-100 d-md-none"></hr>

                            <div className="col-md-3 mx-auto">

                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4 footer_title">Popular Vendors</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className='footer_link'>Chinwe</a>
                                    </li>
                                    <li>
                                        <a href="#!" className='footer_link'>Very long link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className='footer_link'>Very long link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className='footer_link'>Very long link 1</a>
                                    </li>
                                </ul>

                            </div>

                            <hr className="clearfix w-100 d-md-none"></hr>

                            <div className="col-md-3 mx-auto">

                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4 footer_title">ChopUp Delivery</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className='footer_link'>Very long link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className='footer_link'>Very long link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className='footer_link'>Very long link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className='footer_link'>Very long link 1</a>
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>

                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    Chop Up
                    </div>

                </footer>



            </div >
        )
    }
}


const mapStateToProps = state => {
    return {
        areas: state.burger.areas
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSelectedCity: (cityName) => dispatch(actions.selectedCity(cityName)),
        onClearedSelectedCity: () => dispatch(actions.clearedSelectedCity()),
        onSelectedAreas: (areaName) => dispatch(actions.addAreas(areaName)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Home, axios));

