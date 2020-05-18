import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

export const flavourOptions = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
    { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
    { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
];

const ABSU = ['Upgate', 'Rc','Student affairs', 'Lecture East/West']

const OKIGWE = ['Ike road', 'Umuchima', 'Owerri road', 'Ogbonna St']

const UMUAHIA = ['umuahia1', 'umauhia2', 'umuahia3']


class BurgerIngredient extends Component {


    render() {


        let selectedCity = null;

        switch (this.props.city) {
       
            case ('Absu'):
                selectedCity = <div className='Meat'></div
                break;
            case ('Okigwe'):
                selectedCity = <div className='Cheese'></div>
                break;
            case ('Umuahia'):
                selectedCity = <div className='Salad'></div>
                break;

            default:
                selectedCity = null
                break;
        }
        return selectedCity;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
}


const mapStateToProps = state => {
    return {
        city: state.burger.selectedCity
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSelectedCity: (cityName) => dispatch(actions.selectedCity(cityName)),
        onClearedSelectedCity: () => dispatch(actions.clearedSelectedCity())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerIngredient);
