import React  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

export const flavourOptions = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
    { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
    { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
];

const Absu = ['Upgate', 'Rc','Student affairs', 'Lecture East/West']

const Okigwe = ['Ike road', 'Umuchima', 'Owerri road', 'Ogbonna St']

const Umuahia = ['umuahia1', 'umauhia2', 'umuahia3']



const selectedCity = () => {

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
        return currentCity;
    }


selectedCity.propTypes = {
    type: PropTypes.string.isRequired,
}


const mapStateToProps = state => {
    return {
        city: state.burger.selectedCity !== null
    }
}


export default connect(mapStateToProps)(selectedCity);
