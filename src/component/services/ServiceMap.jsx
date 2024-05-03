import React from 'react'
import { ServiceCollection } from "./ServiceCollection"
import ServiceCard from './ServiceCard'


const ServiceMap = () => {
    return (
        <>
            {ServiceCollection.map((service) => (
                <ServiceCard
                    key={service.index}
                    title={service.title}
                    description={service.description}
                    image={service.image}
                />
            ))}
        </>
    )
}

export default ServiceMap