import React from 'react'
import {Box} from '@mui/material'
import MusicHome from './MusicHome'
function Favourites() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
       <Box component="main" className=" w-full">
       <div>
          <MusicHome/>
       </div>
     </Box>
     
       </Box>
    </>
  
  )
}

export default Favourites
