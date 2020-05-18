import * as actionTypes from './actionTypes'
import axios from '../../axios'
import { areas } from '../../components/Layout/DeliveringForm/Locations'

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const initIngredients = (ing) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ing
    }
}
export const loadIngFailed = (error) => {
    return {
        type: actionTypes.LOAD_INGREDIENTS_FAILED,
        error: error
    }
}
export const setIngredients = () => {
    return dispatch => {
        axios
            .get("/ingredients.json")
            .then(res => {
                dispatch(initIngredients(res.data))
            })
            .catch(error => {
                dispatch(loadIngFailed(error))
            })
    }
}


export const selectedCity = (cityName) => {

    console.log('this is the city name', cityName)
    return{
        type: actionTypes.SELECTED_CITY,
        cityName
    }
}

export const clearedSelectedCity = () => {
    console.log('the city was removed')

    return{
        type: actionTypes.CLEARED_SELECTED_CITY
    }
}

export const addAreas = (areas) => {
    const Absu = [
        { value: 'Absu', label: 'Absu', rating: 'safe' },
        { value: 'chocolate', label: 'Chocolate', rating: 'good' },
        { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
        { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
    ];
    const Okigwe = [
        { value: 'Okigwe', label: 'Okigwe', rating: 'safe' },
        { value: 'chocolate', label: 'Chocolate', rating: 'good' },
        { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
        { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
    ];
    const Umuahia = [
        { value: 'Umuahia', label: 'Umuahia', rating: 'safe' },
        { value: 'chocolate', label: 'Chocolate', rating: 'good' },
        { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
        { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
    ];

    let currentCity;

    switch (areas) {

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
    return{
        type: actionTypes.ADDED_AREAS,
        payload: currentCity
    }
}