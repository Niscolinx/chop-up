import React from 'react'
import { Col } from 'react-bootstrap'


const options = {
    Restaurants: {
        Absu: ['AbsuRes1', 'AbsuRes2'],
        Uturu: ['UturuRes1', 'UturuRes2'],
        Okigwe: ['OkigweRes1', 'OkigweRes2'],
        Isuochi: ['IsuochiRes1', 'IsuochiRes2'],
        Isukwuato: ['IsukwuatoRes1', 'IsukwuatoRes2']
    },
    SuperMarkets: {
        Absu: ['AbsuMarket1', 'AbsuMarket2'],
        Uturu: ['UturuMarket1', 'UturuMarket2'],
        Okigwe: ['OkigweMarket1', 'OkigweMarket2'],
        Isuochi: ['IsuochiMarket1', 'IsuochiMarket2'],
        Isukwuato: ['IsukwuatoMarket1', 'IsukwuatoMarket2']
    },
    Pharmacies: {
        Absu: ['AbsuPharmacy1', 'AbsuPharmacy2'],
        Uturu: ['UturuPharmacy1', 'UturuPharmacy2'],
        Okigwe: ['OkigwePharmacy1', 'OkigwePharmacy2'],
        Isuochi: ['IsuochiPharmacy1', 'IsuochiPharmacy2'],
        Isukwuato: ['IsukwuatoPharmacy1', 'IsukwuatoPharmacy2']
    },
    Shops: {
        Absu: ['AbsuShopping1', 'AbsuShopping2'],
        Uturu: ['UturuShopping1', 'UturuShopping2'],
        Okigwe: ['OkigweShopping1', 'OkigweShopping2'],
        Isuochi: ['IsuochiShopping1', 'IsuochiShopping2'],
        Isukwuato: ['IsukwuatoShopping1', 'IsukwuatoShopping2', 'IsukwuatoShopping3']
    },
}

const mapSelections = (title, selectedCity) => {
    const optionsMap = Object.keys(options[title]).map(singleOption => {
        let foundValues;
        if (selectedCity === singleOption) {
            foundValues = options[title][singleOption]
        }
        return foundValues
    })

    console.log('The selected city', title, selectedCity,'the found Values', foundValues)
    return optionsMap.find(ele => {
        return ele
    })

}


export const OptionsMap = (props) => {
    const { selectedCity, title, description } = props
    const result = mapSelections(title, selectedCity)

    let message = `Found ${result.length} ${title} in your area`

    const handleClick = () => {
        console.log('the result is', result)
    }

    return <Col className='services-box_item' onClick={handleClick}>
        <h5 className='services-box_title'>{title}</h5>
        <p className='services-box_description'>{description}</p>
        <p className='services-box_description'>{message}</p>
    </Col>
}