import React, {Component} from 'react'
import { Button } from 'react-bootstrap';



class Home extends Component{

    state ={

    }

    render(){
        return(
            <div>
                <h1 className = 'home'>This is the home</h1>
                <Button className ='button'>hi</Button>
            </div>
        )
    }
}


export default Home