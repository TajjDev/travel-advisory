import React, { useEffect, useState ,useContext} from 'react'
import TraveladvisorCard from '../TravelAdvisoryPage/TraveladvisorCard';
import { travelAdvContext } from '../TravelAdvisoryPage/TravelAdvisorContext';
// import React, { , useContextHook } from 'react'

// import { travelAdvContext } from '../../../../pages/TravelAdvisoryPage/TravelAdvisorContext'

// import './Header.css'
// import TraveladvisorCard from '../../../../pages/TravelAdvisoryPage/TraveladvisorCard'

const Header = () => {

  const [navScroll, setNavScroll] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setNavScroll(true)
      }
      else {
        setNavScroll(false)
      }
    };


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const { userData, searchAdvInput, filteredResult } = useContext(travelAdvContext)

  return (
    <>
    
    <div className="conq">
    {
      // The below code checks if the input field is greater
      // than 1 and if it's, it shows the filtered data 
      // (the filtered is the search of data from the API) else it 
      // shows the entire the response from the API.

      searchAdvInput.length > 1 ? (

          filteredResult.map((element) => {
              return (
                <div className="each">
                  {/* <TraveladvisorCard */}
                  <TraveladvisorCard
                      element={element}
                      key={element.id.value}
                  ></TraveladvisorCard>
                  </div>
                  )
                  
          })
      ) :
          (
            "")

  }
  </div>
  <h1>About us</h1>
    </>
  )
}

export default Header
