import React from 'react'
import Servicestyle from './Service.module.css'

const ServiceCard = (props) => {
    const { image, title, description } = props
    return (
        <div className={Servicestyle.service}>
            <div className={Servicestyle.serviceDiv}>
            <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard