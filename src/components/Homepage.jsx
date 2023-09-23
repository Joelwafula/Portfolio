import React from 'react'
import NavBar from './NavBar'
import AboutMe from './AboutMe'



const Homepage = () => {
  return (
    <div  className='min-h-screen bg-blue-200 items-center justify-center p-10' >
        <div className='bg-gray-100 w-full h-full p-5 rounded'>
         <div>
          <NavBar/>

         </div>
         <div>
          <AboutMe/>
          

         </div>
         
        </div>
      
    </div>
  )
}

export default Homepage
