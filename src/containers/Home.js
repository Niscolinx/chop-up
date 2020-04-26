import React, {Component} from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';



class Home extends Component{

    state ={

    }

    render(){
        return(
            <div>

                <Container fliuid>
                    <Row>
                
                        <Col><h1 className='home'>Everything you need, <span>delivered within minutes</span></h1>
                            <Button className='button'>hi</Button></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Home