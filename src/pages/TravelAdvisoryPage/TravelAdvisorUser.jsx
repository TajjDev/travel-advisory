import React, { useContext } from 'react'
// import { travelAdvContext, useTravelContext } from './TravelAdvisorContext'
import "./moreAbout.css"
import { useLocation, useParams } from 'react-router-dom'
const TravelAdvisorUser = (props) => {
 
  // We use the useLocation hook to access the state 
  // from inside our "TraveladvisorCard" Link
  const { state } = useLocation()

  
  const element = JSON.parse(state)

  console.log("Hiya",element)

  const { name, email, picture, cell, location } = element
  console.log(name);
  console.log(email);
  console.log(picture);
  console.log(cell);
  console.log(location);

  const { first, last } = name
  console.log(first);
  console.log(last);

  const { country, states } = location
  console.log(country);
  console.log(states);


  return (
    <div id='person'>
      <div id='per'>
        <img src={picture.large} alt="" />
        <p> {cell}</p>
        <p> {email} </p>
        <p>{states} {country} </p>
      </div>

      <div>
        <p>{first} bro {last}</p>
      </div>

    </div>
  )
}

export default TravelAdvisorUser