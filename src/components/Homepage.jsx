import React from 'react'
import NavBar from './NavBar'
import AboutMe from './AboutMe'
import ImageProp from './ImageProp'
import SkillOne from './Skills/skillOne'
import Contacts from './contact/contacts'



const Homepage = () => {
  return (
    <div  className='min-h-screen bg-blue-200 items-center justify-center p-20' >
        <div className='bg-gray-100 w-full h-full p-10 pr-40 pl-40 rounded'>
         <div className='pb-5'>
          <NavBar/>

         </div>
         <div className='flex justify-between mb-20'>
          <AboutMe/>
          <ImageProp/>
          

         </div>
         <div className='grid-rows-3'>
          <div className='grid-rows-3'><SkillOne/></div>
          

         </div>
         <div>
          <Contacts/>
         </div>
         
        </div>
      
    </div>
  )
}

export default Homepage
