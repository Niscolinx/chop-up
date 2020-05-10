import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            color: state.selectProps.menuColor,
            padding: 20,
        }),

        control: (_, { selectProps: { width }}) => ({
            width: width
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


        return (
            <div style={divStyle}>
                <Container fliuid className='hero'>
                    <Row className="justify-content-md-center">

                        <Col md="auto" className='hero_heading'>
                            <h1 className='hero_heading--main'>Everything you need,</h1>
                            <h1 className='hero_heading--span'>delivered within minutes</h1>
                        </Col>

                    </Row>
                    <Row>

                        <h3>Delivering to</h3>
                    </Row>
                    <Row>

                        <Col>
                            <CreatableSelect
                                  styles={customStyles}

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

                </Container>
            </div>
        )
    }
}


export default Home
