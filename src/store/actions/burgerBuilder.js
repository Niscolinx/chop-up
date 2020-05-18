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

export const addedAreas = (areas) => {

    return{
        type: actionTypes.ADDED_AREAS,
        areas
    }
}