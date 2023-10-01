import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Contacts = () => {

  return (
    <div className='flex-col'>
       
        <form className='flex-col'>
        <h1 className='mb-5'>Contact me</h1>
           
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
         <TextField id="outlined-basic"  className='mb-5'  label="Full name" variant="outlined" /><br/>
        
           
        <TextField 
        id="outlined-basic"
         label="Email" 
       className='mb-5' 
         variant="outlined" />
           
         </Box>
        
           <div className='flex-col'>
           <span>Type your message</span><br/>
            <input className='h-20 w-50 border border-black' type='text'name='' required='required'/>
            
           </div>
           <div>
           <input type='submit' value='submit' name='send'/>
           
           </div>
        </form>
    </div>
  )
}

export default Contacts