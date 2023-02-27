import React,{useState} from 'react'
import {Box, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
import SearchPage from '../SearchPage'

function Search() {
  const navigate= useNavigate()
  const [searchTerm,setSearchTerm]= useState('')

  const handleSubmit =(e)=>{
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
  }
  return (
    <>
    <Box sx={{background:'radial-gradient(ellipse at center, rgba(181,189,200,0.8) 0%,rgba(130,140,149,0.81) 36%,rgba(32,18,35,0.82) 100%)'}}>
     <Box component="main" className=" ml-80">
     <div className='pt-4'>
        <form onsubmit={handleSubmit} autoComplete='off' className='p-2 text-gray-400 focus-within:text-gray-600'>
<label htmlFor='search-field' className='sr-only'>
  Search all Songs
</label>
<div className='flex flex-row justify-start items-center'>
<FiSearch className='w-5 h-5 m-4 text-black'/>
<TextField size='small' className='w-96 bg-transparent' label="Search all Songs" autoComplete='off' id="search-field"
type="search"
value={searchTerm}
onChange={(e)=>setSearchTerm(e.target.value)}/>
</div>
        </form>
     </div>

     {/* search page */}
     <div>
      <SearchPage/>
     </div>
   </Box>
   
     </Box>
  </>
  )
}

export default Search
