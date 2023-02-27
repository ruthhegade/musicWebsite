import React from 'react'
// import {Error,Loader,SongCard} from '../../Song Comp'
import {geners} from '../../Assets/Constants'
import { useDispatch,useSelector } from 'react-redux'
// import SliderDrawer from '../SliderDrawer'
import {Box,Card} from '@mui/material'
import { genres } from '../../Assets/Constants'
import SongCard from '../../Song Comp/SongCard'
import { useGetTopChartsQuery } from '../../Redux/Services/ShazamCore'
import Loader from '../../Song Comp/Loader'
import Error from '../../Song Comp/Error'

function MusicHome() {  

  const {data,isFetching,error}= useGetTopChartsQuery();
  console.log(data)

  const genreTitle ="Pop"

  if(isFetching) return <Loader title="Loading songs...."/>

  if(error) return <Error/>

  return (
    <>
    <Box sx={{background:'radial-gradient(ellipse at center, rgba(181,189,200,0.8) 0%,rgba(130,140,149,0.81) 36%,rgba(32,18,35,0.82) 100%)'}} className="">
    {/* <SliderDrawer/> */}
     <Box  className=" ml-80" >
     <div className='pb-6'>
        <div className='flex flex-col'>
       <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
        <h1 className='font-bold text-3xl '>Discover </h1>
{/* <select
onChange={()=>{}}
value=""
className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 '
>{
  genres.map((gener)=><option key={gener.value} value={gener.value}> {gener.title}</option>)
}
</select> */}
       </div>
        </div>
        {/* Wraper For the songs */}
        <div className='grid grid-cols-4 sm:justify-start justify-center gap-8'>
{
  data.tracks.map((song,i)=>(
    <SongCard key={song.key}
    song={song}
    i={i}
    />
  ))
}
        </div>
     </div>
  
   </Box>
   
     </Box>
  </>
  )
}

export default MusicHome
