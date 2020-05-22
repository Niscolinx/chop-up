import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Row, Col, Button, Card, CardGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import * as actions from '../store/actions/burgerIndex'
import withErrorHandler from "../components/hoc/withErrorHandler"
import axios from "../axios"

import Hero from '../components/Layout/Hero'
import Steps from '../components/Layout/Steps'
import NewsLetter from '../components/Layout/NewsLetter'
import Cards from '../components/Layout/Cards'



class Home extends Component {


    render() {


        return (
            <div>

                <div className='section-Hero'>

                    <Hero
                        areas={this.props.areas}
                        onClearedSelectedCity={this.props.onClearedSelectedCity}
                        onSelectedAreas={this.props.onSelectedAreas}
                        onSelectedCity={this.props.onSelectedCity}
                    />
                </div>

                <div className='secton-steps'>

                    <Steps />
                </div>

                <div className='section-newsletter'>

                    <NewsLetter />
                </div>

                <div className='section-cards'>

                    <Cards />
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

