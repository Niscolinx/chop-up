import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Row, Col, Button, Card, CardGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import imgUrl from '../assets/images/bg_home.jpg'

import * as actions from '../store/actions/burgerIndex'
import * as locations from '../components/Layout/DeliveringForm/Locations'
import withErrorHandler from "../components/hoc/withErrorHandler"
import axios from "../axios"

import Select from 'react-select';
import { cityOptions } from '../doc/data';



class Home extends Component {

    state = {
        city: null,
        newArea: [],
        disabled: true,
        disabledPointer: 'not-allowed',
        disabledBackground: '#787878'
    }

    handleCityChange = (inputValue: any, actionMeta: any) => {
        // console.group('Input Changed');
        // console.log('the input value is ', inputValue);

        console.log(`action: ${actionMeta}`);
        console.groupEnd();

    };

    cityChange = (newValue: any, actionMeta: any) => {
        // console.group('Value Changed');
        // console.log('The values to compare', newValue);

        console.log('the meta data', actionMeta);
        // console.log(`action: ${actionMeta.action}`);
        console.groupEnd();


        if (newValue !== null) {
            console.log('loaded city')
            // console.log('The values of the newValue', newValue.value);

            this.props.onSelectedCity(newValue.value)
            this.props.onSelectedAreas(newValue.value)

            this.setState({
                city: newValue.value,
                disabled: false,
                disabledPointer: 'pointer',
                disabledBackground: '#fff'
            })

        }
        else {
            console.log('cleared city')
            this.props.onClearedSelectedCity()

            this.setState({
                city: null, 
                disabled: true,
                disabledPointer: 'not-allowed',
                disabledBackground: '#787878'
            })
        }

    };
    handleAreaChange = (inputValue: any, actionMeta: any) => {
        console.group('Input Changed');
        console.groupEnd();

    };

    areaChange = (newValue: any, actionMeta: any) => {
        console.group('Value Changed');

        console.log('the meta data', actionMeta);
        // console.log(`action: ${actionMeta.action}`);
        console.groupEnd();

    
        if (actionMeta.action === 'select-option') {
            this.setState(state => {

                const areaList = [...state.newArea.concat(actionMeta.option)]

                return{
                    newArea:  areaList

                }
            })

        }
        if (actionMeta.action === 'remove-value') {
            this.setState(state => {

                const areaList = state.newArea.filter(area => {
                   return area.label !== actionMeta.removedValue.label
                })

                return{
                    newArea:  areaList

                }
            })

        }
        
        
        
    };
    
    render() {
        console.log('the state is', this.state)

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
        const cityStyles = (height = '3rem') => {
            
            return {
                
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
        const areaStyles = (height = '3rem', disabledPointer = this.state.disabledPointer, disabledBackground = this.state.disabledBackground) => {
            
            return {
                
                menu: (provided, state) => ({
                    ...provided,
                    //width: state.selectProps.width,
                    color: state.selectProps.menuColor,
                    padding: 10,
                    
                }),
                
                option: (styles, state) => ({
                    ...styles,
                    cursor: disabledPointer,
                    padding: '1rem'
                }),

                // control: (styles, { isDisabled }) => {
                //     return {
                //         ...styles,
                //         cursor: isDisabled ? 'not-allowed' : 'default',
                //         // This is an example: backgroundColor: isDisabled ? 'rgba(206, 217, 224, 0.5)' : 'white'
                //         color: isDisabled ? '#aaa' : 'white'
                //     }
                // },
                control: (provided, state) => {
                   const cursor = state.isDisabled ? 'not-allowed' : 'pointer';

                    return{
                        ...provided,
                        cursor: cursor,
                        background: disabledBackground,
                        borderColor: disabledBackground,
                        minHeight: height,
                        height: height,
                        boxShadow: state.isFocused ? null : null,

                    }
                },
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
                    <Container fliuid='true' className='hero'>
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
                                    <Select
                                        styles={cityStyles()}
                                        placeholder={cityPlaceholder}
                                        isClearable
                                        onChange={this.cityChange}
                                        onInputChange={this.handleCityChange}
                                        options={cityOptions}
                                    />

                                </Col>
                                <Col className = {this.state.disabled ? 'disabledPointer' : this.state.disabledPointer}>
                                    <Select
                                        styles={areaStyles()}
                                        placeholder={areaPlaceholder}
                                        isMulti
                                        isClearable
                                        onChange={this.areaChange}
                                        onInputChange={this.handleAreaChange}
                                        options={this.props.areas}
                                        isDisabled ={this.state.disabled}
                                        //isLoading = 'true'
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

