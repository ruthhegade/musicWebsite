import React,{useEffect,useRef} from 'react'
import {Box} from '@mui/material'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {Swiper} from 'swiper/react'
// import {FreeMode} from 'swiper'
// import {playPause,setActiveSong} from '../../Redux/features/playerSlice'
import {useGetSongsBySearchQuery} from '../Redux/Services/ShazamCore'
import { AiFillPlayCircle } from "react-icons/ai";

// import 'swiper/css'
// import 'swiper/css/free-mode'
// import {Box} from '@mui/material'

const SongCard=({song,i})=>(
  <>
  <div className='flex items-center hover:bg-gray-300  hover:text-white rounded-lg px-3'>
  <h3 className='text-lg'>{i + 1}.</h3>
  <div className='w-full flex flex-row items-start  py-2 p-4 rounded-lg cursor-pointer pb-2 font-semibold'>
{/* {song.title}  */}
<div className='flex-1 flex-row justify-between items-center'>
<img className='w-20 h-20 rounded-lg '
src={song?.images?.coverart} alt={song?.title}/>

</div>
<div className='flex-1 flex flex-col  justify-start mx-3'>

  <Link to={`/artists/${song?.artists[0].adamid}`} className="no-underline relative right-80 ">
    <p className='text-base text-gray-700'>{song?.subtitle}</p></Link>
</div>
  </div>
  <div>
    <AiFillPlayCircle className='-ml-40 text-5xl'/>
  </div>
  </div>
 
  </>
)

function SearchPage() {
    const {searchTerm}=useParams()


//   const dispatch = useDispatch()
// const {activeSong,isPlaying}= useSelector ((state)=>state.player)
const {data}= useGetSongsBySearchQuery(searchTerm)
const songs= data?.tracks?.hits?.map((song)=>song.track)



const topPlays =data?.tracks?.slice(0,20)

// const handlePauseClick =()=>{
//   dispatch(playPause(false))
// }
// const handlePlayClick =()=>{
//   dispatch(setActiveSong({song,data,i}))
//   dispatch(playPause(true))
// }
  return (
    <>
    <Box  >
     <Box component="main" className=" ">
      <div className='ml-20'>

    
       <div className='w-full flex flex-col'>
<div className='flex justify-between  items-center'>
  <h2 className='font-bold mt-5'>
   Showing Results for <span className='font-black'>{searchTerm}</span>
  </h2>
  
</div>
<div className='flex flex-wrap sm:justify-start justify-center gap-8'>
{
    songs?.map((song,i)=>(
        <SongCard
key={song.key}
song={song}
data={data}
i={i}
        />
    ))
}
</div>
       </div>
     



     <div className='w-full flex flex-col mt-8 pb-8'>
     <div className='flex flex-row justify-between items-center'>
  <h2 className='font-bold mt-5'>
    Top Artists
  </h2>
  <Link to="/top-artists" className='no-underline relative top-5 mr-20'>
    <p className='text-gray-900 text-base cursor-pointer font-semibold'>see more</p>
  </Link>

</div>
<Swiper
slidesPrevClass='auto'
spaceBetween={15}
freeMode
centeredSlides
centeredSlidesBounds
// modules={[FreeMode]}
className='mt-8 grid grid-cols-6 '
>
{
  topPlays?.map((song,i)=>(
    <div 
    key={song?.key}
    i={i}
    style={{width:'70%',height:'auto'}}
    className="shadow-xl drop-shadow-lg rounded-full -ml-40 "
    >
      <Link to={`/artists/${song?.artists[0].adamid}`}>
        <div className='flex'>
        <img src={song?.images.background} alt="name"  className='rounded-full w-full object-cover'/>
        </div>
        
      </Link>
      </div >
  ))
}
</Swiper>
     </div>
     </div>
   </Box>
   
     </Box>
  </>
  )
}

export default SearchPage
