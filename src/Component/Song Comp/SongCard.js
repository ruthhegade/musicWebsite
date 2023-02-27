import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { FiHeart } from "react-icons/fi";
import {Button} from '@mui/material'
import { useDispatch } from 'react-redux'
import PlayPause from './PlayPause'  
import {playPause,setActiveSongs} from '../Redux/features/playerSlice'

function SongCard({song,isPlaying,activeSong,i}) {
 
  const [favorite,setFavorite]=useState(false)
// const handlePauseClick=()=>{

// }
// const handlePlayClick=()=>{

// }

  return (
    <div className='flex flex-col w-[250px] p-4 bg-black bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
     <div className='relative w-full h-56 group'>
        <div className={`absolute inset-0 justify-center items-center bg-bla
         bg-opacity-50 group-hover:flex ${activeSong?.title===song.title? 'flex bg-black bg-opacity-70':"hidden"}`}>
            {/* play and pause component */}
{/* <PlayPause song={song}
isPlaying={isPlaying}
activeSong={activeSong}
handlePause={handlePauseClick}
handlePlay={handlePlayClick}
/> */}
        </div>
        <img alt="song_img" src={song.images?.coverart}/>
     </div>
     <div className='mt-4 flex flex-col'>
<p className='font-semibold text-lg truncate'>
    <Link to={`/songs/${song?.key}`} className='no-underline text-cyan-500'>
    {song.title}</Link>
</p>
<p className=' text-sm truncate mt-1'>
    <Link to={song.artists ?`/artists/${song?.artists[0]?.adamid}`: '/top-artists'} className='no-underline text-gray-300'>
    {song.subtitle}</Link>
</p>
     </div>
     <div className='-ml-5'>
      <Button >
<FiHeart className='text-xl shadow-xl'
onClick={()=>{setFavorite(true)}} style={{color:favorite==true?"red":null}} />
      </Button>
     </div>
    </div>
  )
}

export default SongCard
