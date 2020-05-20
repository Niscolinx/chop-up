import React, {Component} from 'react'
import { Container, Row, Col, Button, Card, CardGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import imgUrl from '../../assets/images/bg_home.jpg'

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { cityOptions } from '../../doc/data';


 class Hero extends component {

     state = {
         currentCity: null,
         oldCity: null,
         newArea: [],
         disabled: true,
         disabledPointer: 'not-allowed',
         disabledBackground: '#787878',
     }


     handleCityChange = (inputValue: any, actionMeta: any) => {
         // console.group('Input Changed');
         // console.log('the input value has been changed and it is now', inputValue);

         console.log(`action: ${actionMeta}`);
         console.groupEnd();

     };

     cityChange = (newValue: any, actionMeta: any) => {
         //  console.group('Value Changed', newValue);
         // console.log('The values to compare', newValue);

         console.log('the meta data', actionMeta);
         // console.log(`action: ${actionMeta.action}`);
         console.groupEnd();


         if (newValue !== null) {
             console.log('loaded city')
             // console.log('The values of the newValue', newValue.value);

             this.props.onSelectedCity(newValue.value)
             this.props.onSelectedAreas(newValue.value)

             let storeOldCity = this.state.currentCity

             if (newValue.value !== this.state.currentCity) {
                 this.setState({
                     newArea: []
                 })
             }

             this.setState({
                 currentCity: newValue.value,
                 oldCity: storeOldCity,
                 disabled: false,
                 disabledPointer: 'pointer',
                 disabledBackground: '#fff',
             })


         }
         else {
             console.log('cleared city')
             this.props.onClearedSelectedCity()


             this.setState({
                 currentCity: null,
                 disabled: true,
                 disabledPointer: 'not-allowed',
                 disabledBackground: '#787878',
                 newArea: []
             })
         }

     };
     handleAreaChange = (inputValue: any, actionMeta: any) => {
         console.group('Input Changed', inputValue, 'the Changed value is', actionMeta);
         console.groupEnd();

     };

     areaChange = (newValue: any, actionMeta: any) => {
         console.group('Value Changed');

         console.log('the meta data', actionMeta, 'the newValue is', newValue);
         // console.log(`action: ${actionMeta.action}`);
         console.groupEnd();

         this.setState({
             newArea: newValue
         })


     };

    render(){
        
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
       const areaStyles = (height = '3rem', newState = this.state) => {

            return {

                menu: (provided, state) => ({
                    ...provided,
                    //width: state.selectProps.width,
                    // color: state.selectProps.menuColor,
                    padding: 10,

                }),


                option: (styles, state) => ({
                    ...styles,
                    cursor: newState.disabledPointer,
                    padding: '1rem'
                }),

                control: (provided, state) => {
                    const cursor = state.isDisabled ? 'not-allowed' : 'pointer';

                    return {
                        ...provided,
                        cursor: cursor,
                        background: newState.disabledBackground,
                        borderColor: newState.disabledBackground,
                        minHeight: height,
                        height: height,
                        boxShadow: state.isFocused ? null : null,

                    }
                },

                placeholder: (defaultStyles, state) => {
                    return {
                        ...defaultStyles,
                        color: state.isDisabled ? '#9c9a9a' : '#808080'
                    }
                },
                valueContainer: (provided, state) => ({
                    ...provided,
                    height: height,
                    padding: '0 6px',
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
    

    const divStyle = {
        backgroundImage: 'url(' + imgUrl + ')',
        width: '100%',
        height: '95vh',
        backgroundSize: 'cover',
    };

    const cityPlaceholder = 'Choose City'
    const areaPlaceholder = 'Select your area'

    const animated = makeAnimated()


    return (
        <div style={divStyle} >
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
                                components={animated}

                            />

                        </Col>
                        <Col className={this.state.disabled ? 'disabledPointer' : this.state.disabledPointer}>
                            <Select

                                styles={areaStyles()}
                                placeholder={areaPlaceholder}
                                isClearable
                                isMulti
                                onChange={this.areaChange}
                                onInputChange={this.handleAreaChange}
                                options={this.props.areas}
                                isDisabled={this.state.disabled}
                                components={animated}
                                value={this.state.newArea}
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
        </div >
    )
}}

export default Home