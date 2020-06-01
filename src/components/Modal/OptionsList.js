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
    Shopping: {
        Absu: ['AbsuShopping1', 'AbsuShopping2'],
        Uturu: ['UturuShopping1', 'UturuShopping2'],
        Okigwe: ['OkigweShopping1', 'OkigweShopping2'],
        Isuochi: ['IsuochiShopping1', 'IsuochiShopping2'],
        Isukwuato: ['IsukwuatoShopping1', 'IsukwuatoShopping2']
    },
}

let listCategory = []
const mapSelections = (props) => {
    const optionsMap = Object.keys(options[props]).map(singleOption => {
           let compileList = listCategory.push(singleOption)
           return compileList
        })


    console.log('The list',optionsMap)
}
export const OptionsMap = (props) => {
console.log('the category', listCategory)
    return <Col className='services-box_item' onClick={OptionsMap}>
        <h5 className='services-box_title'>{props.title}</h5>
        <p className='services-box_description'>{props.description}</p>
        <p className='services-box_description'>{mapSelections(props.title)}</p>
    </Col>
}