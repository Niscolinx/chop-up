import React, {Component} from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';



class Home extends Component{

    state ={

    }

    render(){
        return(
            <div>

                <Container>
                    <Row>
                <h1 className = 'home'>This is the home</h1>
                <Button className ='button'>hi</Button>
                        <Col>1 of 1</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Home