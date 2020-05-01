import React, {Component} from 'react'
import { Button, Container, Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import imgUrl from '../assets/images/background_home.jpg'



class Home extends Component{

    state ={

    }

    render(){
        const divStyle = {
            backgroundImage: 'url(' + imgUrl + ')',
            width: '100%',
            height: '95vh',
            backgroundSize: 'cover'
        };
        return(
            <div style = {divStyle}>
                hellg

                <Container fliuid>
                    <Row>
                
                        <Col><h1>Everything you need, <span>delivered within minutes</span></h1></Col>
                

                        <Col>
                        </Col>
                        <>
                        </>
                    </Row>
                            delivering to
                            <Form className = 'delivering-form'>
                                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                                    <Form.Label>Custom select Small</Form.Label>
                                    <Form.Control as="select" size="sm" custom>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                                    <Form.Label>Custom select Large</Form.Label>
                                    <Form.Control as="select" size="lg" custom>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                </Container>
            </div>
        )
    }
}


export default Home