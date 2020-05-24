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



class Home extends Component {


    render() {
        console.log('The home', this)


        return (
            <div>

                <div className='section-Hero'>

                    <Hero
                        properties={this.props}
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

