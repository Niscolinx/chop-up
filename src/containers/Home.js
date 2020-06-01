import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { Container, Row, Col, Button, Card, CardGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import * as actions from '../store/actions/burgerIndex'
import withErrorHandler from "../components/hoc/withErrorHandler"
import axios from "../axios"

import Hero from '../components/Layout/Hero'
import Steps from '../components/Layout/Steps'
import NewsLetter from '../components/Layout/NewsLetter'
import Cards from '../components/Layout/Cards'
import Cart from '../components/cart'



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
                        onSelectedArea={this.props.onSelectedArea}
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

            </div >
        )
    }
}


const mapStateToProps = state => {
    return {
        areas: state.burger.areas,
        selectedArea: state.burger.selectedArea,
        selectedCity: state.burger.selectedCity
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSelectedCity: (cityName) => dispatch(actions.selectedCity(cityName)),
        onClearedSelectedCity: () => dispatch(actions.clearedSelectedCity()),
        onSelectedAreas: (areaName) => dispatch(actions.addAreas(areaName)),
        onSelectedArea: (areaName) => dispatch(actions.selectedArea(areaName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Home, axios));

