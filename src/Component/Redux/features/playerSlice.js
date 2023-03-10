import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentSongs:[],
    currentIndex:0,
    isActive:false,
    isPalying:false,
    activeSong:{},
    genreListId:""
}

export const playerSlice= createSlice({
    name:'player',
    initialState,
    reducers:{
        setActiveSong:(state,action)=>{
            state.activeSong=action.payload.activeSong

            if(action.payload?.data?.tracks?.hits){
                state.currentSongs=action.payload.data.tracks.hits
            }else if (action.payload?.data?.properties){
                state.currentSongs=action.payload.data.tracks
            }else {
                state.currentSongs = action.payload.data
            }

            state.currentIndex = action.payload.i
            state.isActive= true
        }
    }

})