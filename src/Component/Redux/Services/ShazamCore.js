import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'e88dd2e138msh44372f14c9307bfp1ebc05jsnd447a44ea6c6\n',
//       'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam.p.rapidapi.com/charts/track', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


    export const shazamCoreApi = createApi({
        reducerPath:"shazamCoreApi",
        baseQuery:fetchBaseQuery({
            baseUrl:'https://shazam.p.rapidapi.com',
            prepareHeaders:(headers)=>{
                headers.set('X-RapidAPI-Key','e88dd2e138msh44372f14c9307bfp1ebc05jsnd447a44ea6c6\n')

                return headers
            },
        }),
        endpoints:(builder)=>({
            getTopCharts:builder.query({query:()=> '/charts/track'}),
            getSongsBySearch:builder.query({query:(searchTerm)=>`/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
        })
    })

    export const {
        useGetTopChartsQuery,
        useGetSongsBySearchQuery
    }= shazamCoreApi