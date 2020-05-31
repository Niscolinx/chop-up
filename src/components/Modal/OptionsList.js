

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

export const optionsMap = (props) => {

    const optionsMap = Object.keys(options).map(singleOption => {
        return options[singleOption].map(place => {
    
        })
    })

    return optionsMap
}