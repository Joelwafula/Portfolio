import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between '>
      <h1 className='font-semibold'>Joel</h1>
      <div className='justify space-x-4'>
      <span>Home</span>
      <span>product</span>
      <span>pricing</span>
      <span>blogs</span>
      </div>
      <div className='bg-blue-300 rounded p-1'>
        <h2 className='text-white'>Hire me</h2>
      </div>
     
    </div>
  )
}

export default NavBar
