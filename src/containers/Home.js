import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import imgUrl from '../assets/images/background_home.jpg'
import * as locations from '../components/Layout/DeliveringForm/Locations'


class Home extends Component {

    // state = {

    // }

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
    //                                 <Form.Control as="select" size="lg" custom className='delivering_form--control'>
    //                                     <option value="" disabled selected hidden className='delivering_form--control-placeholder'>Select your area</option>

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

    render() {

        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                Custom toggle
    </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                    Orange
      </Dropdown.Item>
                <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown >

        const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
            <a
                href=""
                ref={ref}
                onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
                }}
            >
                {children}
    &#x25bc;
            </a>
        ));

        // forwardRef again here!
        // Dropdown needs access to the DOM of the Menu to measure it
        return (
        const CustomMenu = React.forwardRef(
            ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
                const [value, setValue] = useState('');

                return (
                    <div
                        ref={ref}
                        style={style}
                        className={className}
                        aria-labelledby={labeledBy}
                    >
                        <FormControl
                            autoFocus
                            className="mx-3 my-2 w-auto"
                            placeholder="Type to filter..."
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                        />
                        <ul className="list-unstyled">
                            {React.Children.toArray(children).filter(
                                (child) =>
                                    !value || child.props.children.toLowerCase().startsWith(value),
                            )}
                        </ul>
                    </div>
                )
            }
        )
        )
    }
}



export default Home