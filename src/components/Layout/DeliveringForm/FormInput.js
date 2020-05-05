import React from 'react'

const formInput = (props) => {
    props.map(item => {
        let lower = item.toLowerCase()
        let upper = item.charAt(0).toUpperCase() + item.slice(1)
        return <option value={lower}>{upper}</option>

    })
}

export default formInput