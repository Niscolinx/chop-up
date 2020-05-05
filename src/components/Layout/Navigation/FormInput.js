import React from 'react'

let cities = ['okigwe', 'uture', 'Absu', 'Enugu']
let areas = ['Upgate', 'Owerri-road', 'student affairs', 'School cafe']

const formInput = (props) => {
    return {
        this.props.map(item => {
            let lower = item.toLowerCase()
            let upper = item.charAt(0).toUpperCase() + item.slice(1)
            return <option value={lower}>{upper}</option>

        }
})
}