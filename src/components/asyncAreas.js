import React, { Component } from 'react';
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



const BurgerIngredient = () => {

        let selectedCity = null;

        switch (this.props.city) {
       
            case ('Absu'): return handleAbsu()
            case ('Okigwe'): return handleOkigwe()
            case ('Umuahia'): return handleUmuahia()
            

            default:
                selectedCity = null
                break;
        }
        return selectedCity;
    }


BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
}


const mapStateToProps = state => {
    return {
        city: state.burger.selectedCity !== null
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSelectedCity: (cityName) => dispatch(actions.selectedCity(cityName)),
        onClearedSelectedCity: () => dispatch(actions.clearedSelectedCity())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerIngredient);
