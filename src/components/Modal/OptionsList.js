import React from 'react'
import { Col } from 'react-bootstrap'
import pharmacy from '../../assets/svg/001-pharmacy.svg'
import shoppingCart from '../../assets/svg/002-shopping-cart.svg'
import shoppingBag from '../../assets/svg/003-shopping-bag.svg'
import healthyEating from '../../assets/svg/004-healthy-eating.svg'



const options = {
    Restaurants: {
        Absu: ['AbsuRes1', 'AbsuRes2', 'AbsuRes3', 'AbsuRes4'],
        Uturu: ['UturuRes1', 'UturuRes2', 'UturuRes3', 'UturuRes4'],
        Okigwe: ['OkigweRes1', 'OkigweRes2'],
        Isuochi: ['IsuochiRes1', 'IsuochiRes2', 'IsuochiRes3'],
        Isukwuato: ['IsukwuatoRes1', 'IsukwuatoRes2']
    },
    SuperMarkets: {
        Absu: ['AbsuMarket1', 'AbsuMarket2'],
        Uturu: ['UturuMarket1', 'UturuMarket2', 'UturuMarket3', 'UturuMarket4', 'UturuMarket5'],
        Okigwe: ['OkigweMarket1', 'OkigweMarket2', 'OkigweMarket3', 'OkigweMarket4'],
        Isuochi: ['IsuochiMarket1', 'IsuochiMarket2'],
        Isukwuato: ['IsukwuatoMarket1', 'IsukwuatoMarket2']
    },
    Pharmacies: {
        Absu: ['AbsuPharmacy1', 'AbsuPharmacy2', 'AbsuPharmacy3', 'AbsuPharmacy4'],
        Uturu: ['UturuPharmacy1', 'UturuPharmacy2', 'UturuPharmacy3', 'UturuPharmacy4'],
        Okigwe: ['OkigwePharmacy1', 'OkigwePharmacy2'],
        Isuochi: ['IsuochiPharmacy1', 'IsuochiPharmacy2'],
        Isukwuato: ['IsukwuatoPharmacy1', 'IsukwuatoPharmacy2', 'IsukwuatoPharmacy3']
    },
    Shops: {
        Absu: ['AbsuShopping1', 'AbsuShopping2', 'AbsuShopping3'],
        Uturu: ['UturuShopping1', 'UturuShopping2'],
        Okigwe: ['OkigweShopping1', 'OkigweShopping2', 'OkigweShopping3'],
        Isuochi: ['IsuochiShopping1', 'IsuochiShopping2'],
        Isukwuato: ['IsukwuatoShopping1', 'IsukwuatoShopping2', 'IsukwuatoShopping3']
    },
}

const mapSelections = (title, selectedCity) => {
    const optionsMap = Object.keys(options[title]).map(singleOption => {
        let foundValues;
        if (selectedCity === singleOption) {
            foundValues = options[title][singleOption]
            console.log('The selected city', title, selectedCity,'the found Values', foundValues)
        }
        return foundValues
    })

    return optionsMap.find(ele => {
        return ele
    })
}


export const OptionsMap = (props) => {
    const { selectedCity, selectedArea, title, description } = props
    const result = mapSelections(title, selectedCity)

    // Wait for the props before padding the result.length otherwise an error will be thrown

    let message;
    if(selectedArea){
    message = `Found ${result.length} ${title} in your area`
    }
    else{
        message = 'Waiting for props'
    }

    const handleClick = () => {
        console.log('the result is', result)
    }
  

    return <Col className='services-box_item' onClick={handleClick}>
        {/* <i class="fa fa-shopping-basket" aria-hidden="true"></i>
        <i class="fa fa-cutlery" aria-hidden="true"></i> */}
        <img src = {svg} alt ='' style={{width: '2.5rem', marginBottom: '1rem'}}/>

        <h5 className='services-box_title'>{title}</h5>
        <p className='services-box_description'>{description}</p>
        <p className='services-box_description'>{message}</p>
    </Col>
}