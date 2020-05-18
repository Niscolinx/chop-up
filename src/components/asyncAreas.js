import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

export const flavourOptions = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
    { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
    { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
];


const okigwe = ['Ike road', 'Umuchima', 'Owerri road', 'Ogbonna St']

const Umuahia = ['umuahia1', 'umauhia2', 'umuahia3']

const Absu = ['Upgate', 'Rc','Student affairs', 'Lecture East/West']

class BurgerIngredient extends Component {


    render() {


        let ingredient = null;

        switch (this.props.type) {
       
            case ('meat'):
                ingredient = <div className='Meat'></div>
                break;
            case ('cheese'):
                ingredient = <div className='Cheese'></div>
                break;
            case ('salad'):
                ingredient = <div className='Salad'></div>
                break;
            case ('bacon'):
                ingredient = <div className='Bacon'></div>
                break;

            default:
                ingredient = null
                break;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
}


const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        error: state.burger.error,
        auth: state.auth.tokenId,
        authErr: state.auth.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSelectedCity: (cityName) => dispatch(actions.selectedCity(cityName)),
        onClearedSelectedCity: () => dispatch(actions.clearedSelectedCity())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerIngredient);
