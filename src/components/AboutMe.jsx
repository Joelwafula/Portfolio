import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex  flex-col justify-start'>
        <span className='text-2xl flex mb-5'>Hi! I am Joel</span>
        
        <h2 className='text-2xl flex mb-5'> I am a Software Engineer</h2>

       <div><p className='text-start text-w-[400px]'>
       I have specialised in web development,<br/>

mobile developmentand currently learning<br/>

machine learning. I am proficient in coding<br/>

Javascript,Golang, Nodejs and C++. Moreover.<br/>

I am proficient in react,nextjs,tailwind.<br/>


       </p>
      
      
       </div>
        <br/>
        <div className='flex w-50 h-10 bg-sky-400  justify-between items-center rounded' >
          <h2 className='pl-4'>
            Reactjs
          </h2>
          <div class="border-r border-white h-6"></div>
          <h2>
            React native
          </h2>
          <div class="border-r border-white h-6"></div>
          <h2>
            NodeJs
          </h2>
          <div class="border-r border-white h-6"></div>
          <h2 className='pr-4'>
            MongoDb
          </h2>
        </div>
      
    </div>
  )
}

export default AboutMe
