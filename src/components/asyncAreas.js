import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const flavourOptions = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
    { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
    { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
];
class BurgerIngredient extends Component {


    render() {
        let okigwe = ['Ike road', 'Umuchima', 'Owerri road', 'Ogbonna St']

        let Umuahia = ['umuahia1', 'umauhia2', 'umuahia3']

        let Absu = ['Upgate', 'Rc','Student affairs', 'Lecture East/West']


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

export default BurgerIngredient;