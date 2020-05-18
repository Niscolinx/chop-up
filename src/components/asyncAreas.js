import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

 const Absu = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
    { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
    { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
];

const Absus = ['Upgate', 'Rc','Student affairs', 'Lecture East/West']

const Okigwe = ['Ike road', 'Umuchima', 'Owerri road', 'Ogbonna St']

const Umuahia = ['umuahia1', 'umauhia2', 'umuahia3']



class selectedCity extends Component{

    render(){
    

        let currentCity = null;

        switch (this.props.city) {
       
            case ('Absu'):
                currentCity = Absu
                break;
            case ('Okigwe'):
                currentCity = Okigwe
                break;
            case ('Umuahia'):
                currentCity = Umuahia
                break;
           
            default:
                currentCity = null
                break;
        }
        console.log('The current city',currentCity)
        console.log('The current city from props',this.prosp.city)
        return currentCity;
    }

}
selectedCity.propTypes = {
    type: PropTypes.string.isRequired,
}


const mapStateToProps = state => {
    return {
        city: state.burger.selectedCity !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectedArea: (ingName) => dispatch(actions.addIngredient(ingName)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(selectedCity);
