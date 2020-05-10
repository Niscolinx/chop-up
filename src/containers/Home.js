import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import imgUrl from '../assets/images/background_home.jpg'
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
        const selectArea = locations.areas.map((item, i) => {
            let lower = item.toLowerCase()
            let upper = item.charAt(0).toUpperCase() + item.slice(1)

            return <option value={lower} key={item + i} className='delivering_form--locations_item'>{upper}</option>

        })


        return (
            <div style={divStyle}>

                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="2">
                            1 of 3
    </Col>
                        <Col md="auto">                            <h1 className='hero_heading--main'>Everything you need,</h1>
                            <h1 className='hero_heading--span'>delivered within minutes</h1></Col>
                        <Col xs lg="2">
                            3 of 3
    </Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col md="auto">Variable width content</Col>
                        <Col xs lg="2">
                            3 of 3
    </Col>
                    </Row>
                </Container>
                <Container fliuid justify-content-md-center className='hero'>
                    <Row className="justify-content-md-center">

                        <Col className='hero_heading'>
                            <h1 className='hero_heading--main'>Everything you need,</h1>
                            <h1 className='hero_heading--span'>delivered within minutes</h1>
                        </Col>

                    </Row>

                    {/* <Row className='delivering'> */}
                    {/* <h3 className='delivering_text'>Delivering to</h3> */}
                    <Row>

                        <h3>Delivering to</h3>
                    </Row>
                    <Row>

                        <Col>
                            <CreatableSelect
                                isClearable
                                onChange={this.handleChange}
                                onInputChange={this.handleInputChange}
                                options={colourOptions}
                            />
                        </Col>
                        <Col>
                            <CreatableSelect
                                isClearable
                                onChange={this.handleChange}
                                onInputChange={this.handleInputChange}
                                options={colourOptions}
                            />
                        </Col>


                        {/* <Form className='delivering_form'>
                            <Form.Group>
                                <Form.Control as="select" size="lg" custom className='delivering_form--control'>
                                    <option value="" disabled selected hidden className='delivering_form--control-placeholder'>Choose your city</option>

                                    {selectCity}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control as="select" size="lg" custom className='delivering_form--control'>
                                    <option value="" disabled selected hidden className='delivering_form--control-placeholder'>Select your area</option>

                                    {selectArea}
                                </Form.Control>

                                

                            </Form.Group>


                        </Form> */}
                    </Row>


                    {/* <>
                    <h1>Restaurant</h1>
                    <h1>Restaurant</h1>
                    <h1>Groceries</h1>
                    <h1>Restaurants</h1> 
                    </>*/}
                </Container>
            </div>
        )
    }
}


export default Home
