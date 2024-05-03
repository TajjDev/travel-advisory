import React, { useContext, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Travel.css"
import { travelAdvContext } from './TravelAdvisorContext'



const TraveladvisorCard = (props) => {
   
   
   
   
   
    // We passed the "element" as a props in the "travel advisor"
    // component and then destructered it here inside this component
    // to get access to the object keys in the element
    const { name, email, picture, cell, location } = props.element

    // This "name" has been destructured
    const { first, last } = name

    // This "location" has been destructured
    const { country, state } = location


    return (

        <div className='card-control'>
            
            <div className="card">
                <div className='card-1'>
                    <img src={picture.large} alt="user-image" />
                </div>

                <div className='card-2'>
                    <h1>{first} {last}</h1>
                    <p className='card-2-email'>{state}, {country}</p>
                    <p>{cell}</p>
                    <p className='card-2-email'>{email}</p>

                    <div className='card-3'>
                       

                        {/* The state is a react dom property of Link 
                            that takes in a value to be used in the next route
                            without appearing in the "endpoint"

                            So we then use the json.stringify to parse an 
                            object into strings so that we can use wherever
                            we want to use it
                        */}
                        <Link to={`/traveladvisory/traveladvisoruser/`} state={JSON.stringify(props.element)} 
                        // onClick={changeGlobal}
                        >
                            <p className='learn-more'>Read More</p>
                        </Link>
                    </div >


                </div>
            </div>

        </div>

    )
}

export default TraveladvisorCard


