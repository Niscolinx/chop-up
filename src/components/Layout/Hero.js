import React from 'react'
import { Container, Row, Col, Button, Card, CardGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import imgUrl from '../assets/images/bg_home.jpg'


export const Hero = () => {

    const divStyle = {
        backgroundImage: 'url(' + imgUrl + ')',
        width: '100%',
        height: '95vh',
        backgroundSize: 'cover',
    };

    const cityPlaceholder = 'Choose City'
    const areaPlaceholder = 'Select your area'

    const animated = makeAnimated()





    // const selectCity = locations.cities.map((item, i) => {
    //     let lower = item.toLowerCase()
    //     let upper = item.charAt(0).toUpperCase() + item.slice(1)
    //     return <option value={lower} key={item + i} className='delivering_form--locations_item'>{upper}</option>

    // })
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
}