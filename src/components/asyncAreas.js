import React from 'react';
import { connect } from 'react-redux'

import * as actions from '../store/actions/burgerIndex'


const Absu = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
    { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
    { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
];

const Absus = ['Upgate', 'Rc', 'Student affairs', 'Lecture East/West']

const Okigwe = ['Ike road', 'Umuchima', 'Owerri road', 'Ogbonna St']

const Umuahia = ['umuahia1', 'umauhia2', 'umuahia3']




export const selectedCity = (props) => {

    let currentCity;

    console.log(props.city)

    switch (props.city) {

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
    console.log('The current city from props', this.prosp.city)
    console.log('The current city', currentCity)
    return props.onSelectedAreas(currentCity)


}



const mapStateToProps = state => {
    return {
        city: state.burger.selectedCity !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectedAreas: (areaName) => dispatch(actions.addAreas(areaName)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(selectedCity);
