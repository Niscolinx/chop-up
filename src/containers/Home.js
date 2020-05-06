// import React, { Component } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
// import Form from 'react-bootstrap/Form'
// import imgUrl from '../assets/images/background_home.jpg'
// import * as locations from '../components/Layout/DeliveringForm/Locations'


// class Home extends Component {

//     state = {

//     }

//     render() {
//         const divStyle = {
//             backgroundImage: 'url(' + imgUrl + ')',
//             width: '100%',
//             height: '95vh',
//             backgroundSize: 'cover',
//         };




//         const selectCity = locations.cities.map((item, i) => {
//             let lower = item.toLowerCase()
//             let upper = item.charAt(0).toUpperCase() + item.slice(1)
//             return <option value={lower} key={item + i} className='delivering_form--locations_item'>{upper}</option>

//         })
//         const selectArea = locations.areas.map((item, i) => {
//             let lower = item.toLowerCase()
//             let upper = item.charAt(0).toUpperCase() + item.slice(1)
            
//             return <option value={lower} key={item + i} className='delivering_form--locations_item'>{upper}</option>

//         })


//         return (
//             <div style={divStyle}>
//                 <Container fliuid className='hero'>
//                     <Row>

//                         <Col className='hero_heading'>
//                             <h1 className='hero_heading--main'>Everything you need,</h1>
//                             <h1 className='hero_heading--span'>delivered within minutes</h1>
//                         </Col>

//                     </Row>

//                     <Row className='delivering'>
//                         <h3 className='delivering_text'>Delivering to</h3>
//                         <Form className='delivering_form'>
//                             <Form.Group>
//                                 <Form.Control as="select" size="lg" custom className='delivering_form--control'>
//                                     <option value="" disabled selected hidden className='delivering_form--control-placeholder'>Choose your city</option>

//                                     {selectCity}
//                                 </Form.Control>
//                             </Form.Group>
//                             <Form.Group>
//                                 <Form.Control as="select" size="lg" custom className='delivering_form--control' title="Choose one of the following...">
//                                     {/* <option value="" disabled selected hidden className='delivering_form--control-placeholder'>Select your area</option> */}

//                                     {selectArea}
//                                 </Form.Control>

                                

//                             </Form.Group>


//                         </Form>
//                     </Row>

//                     {/* <>
//                     <h1>Restaurant</h1>
//                     <h1>Restaurant</h1>
//                     <h1>Groceries</h1>
//                     <h1>Restaurants</h1> 
//                     </>*/}
//                 </Container>
//             </div>
//         )
//     }
// }


// export default Home

import React from 'react';
import SelectSearch from 'react-select-search';
import { useSelect } from 'react-select-search';

/**
 * The options array should contain objects.
 * Required keys are "name" and "value" but you can have and use any number of key/value pairs.
 */
const options = [
    { name: 'Swedish', value: 'sv' },
    { name: 'English', value: 'en' },
    {
        type: 'group',
        name: 'Group name',
        items: [
            { name: 'Spanish', value: 'es' },
        ]
    },
];

/* Simple example */


const Home = ({ options, value, multiple, disabled }) => {
    const [snapshot, valueProps, optionProps] = useSelect({
        options,
        value,
        multiple,
        disabled,
    });
    
    return (
        <div>
        <SelectSearch options={options} defaultValue="sv" name="language" placeholder="Choose your language" />
            <button {...valueProps}>{snapshot.displayValue}</button>
            {snapshot.focus && (
                <ul>
                    {snapshot.options.map((option) => (
                        <li key={option.value}>
                            <button {...optionProps} value={option.value}>{option.name}</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home