import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex  flex-col justify-start'>
        <span className='text-2xl '>Hi! I am Joel</span>
        <h2 className='text-2xl'> I am a Software Engineer</h2>
        <p className='text-lg'>
            I have specialised in web development,<br/>
            mobile developmentand currently learning<br/>
             machine learning. I am proficient in coding<br/>
            Javascript,Golang, Nodejs. Moreover, I am <br/>
            proficient in react,nextjs <br/>
        </p>
        <div className='flex'>
          <h2>
            Reactjs
          </h2>
          <h2>
            React native
          </h2>
          <h2>
            NodeJs
          </h2>
          <h2>
            MongoDb
          </h2>
        </div>
      
    </div>
  )
}

export default AboutMe
