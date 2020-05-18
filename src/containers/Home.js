import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Row, Col, Button, Card, CardGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import imgUrl from '../assets/images/bg_home.jpg'

import * as actions from '../store/actions/burgerIndex'
import * as locations from '../components/Layout/DeliveringForm/Locations'
import withErrorHandler from "../components/hoc/withErrorHandler"
import axios from "../axios"

import CreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import { colourOptions } from '../doc/data';
import selectedCity from '../components/asyncAreas'


class Home extends Component {

    state = {
        city: null
    }

    handleInputChange = (inputValue: any, actionMeta: any) => {
        console.group('Input Changed');
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();

        console.log('the colour options', colourOptions)
        console.log('the city options', selectedCity)
    };
    
    handleChange = (newValue: any, actionMeta: any) => {
        console.group('Value Changed');
        console.log(newValue);
        
        console.log('the meta data',actionMeta);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        
        console.log('The value',newValue)
        if(newValue !== null){
            console.log('loaded city')
            this.props.onSelectedCity(newValue.value)
    
        }
        else{
            console.log('cleared city')
            this.props.onClearedSelectedCity()
        }
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
        const customStyles = (height= '3rem') => {
            return{

                menu: (provided, state) => ({
                    ...provided,
                    //width: state.selectProps.width,
                    color: state.selectProps.menuColor,
                    padding: 10,
    
                }),
    
                option: (styles, state) => ({
                    ...styles,
                    cursor: 'pointer',
                    padding: '1rem'
                }),
                control: (provided, state) => ({
                    ...provided,
                    cursor: 'pointer',
                    background: '#fff',
                    borderColor: 'white',
                    minHeight: height,
                    height: height,
                    boxShadow: state.isFocused ? null : null,
                }),
                valueContainer: (provided, state) => ({
                    ...provided,
                    height: height,
                    padding: '0 6px'
                }),
    
                input: (provided, state) => ({
                    ...provided,
                    margin: '0px',
                }),
                indicatorSeparator: state => ({
                    display: 'none',
                }),
                indicatorsContainer: (provided, state) => ({
                    ...provided,
                    height: height,
                }),
              
    
                singleValue: (provided, state) => {
                    const opacity = state.isDisabled ? 0.5 : 1;
                    const transition = 'opacity 300ms';
    
                    return { ...provided, opacity, transition };
                }
            }
        }


        const selectArea = locations.areas.map((item, i) => {
            let lower = item.toLowerCase()
            let upper = item.charAt(0).toUpperCase() + item.slice(1)

            return <option value={lower} key={item + i} className='delivering_form--locations_item'>{upper}</option>

        })

        const cityPlaceholder = 'Choose City'
        const areaPlaceholder = 'Select your area'


        return (
            <div>

                <div style={divStyle}>
                    <Container fliuid = 'true'className='hero'>
                        <div className='delivering mt-5'>

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
                                        styles={customStyles()}
                                        placeholder={cityPlaceholder}
                                        isClearable
                                        onChange={this.handleChange}
                                        onInputChange={this.handleInputChange}
                                        options={colourOptions}
                                        />
                                      
                                </Col>
                                <Col>
                                    <AsyncSelect
                                        styles={customStyles()}
                                        placeholder={areaPlaceholder}
                                        isMulti
                                        isClearable
                                        onChange={this.handleChange}
                                        onInputChange={this.handleInputChange}
                                        options={selectedCity}
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
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        error: state.burger.error,
        auth: state.auth.tokenId,
        authErr: state.auth.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSelectedCity: (cityName) => dispatch(actions.selectedCity(cityName)),
        onClearedSelectedCity: () => dispatch(actions.clearedSelectedCity())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Home, axios));

