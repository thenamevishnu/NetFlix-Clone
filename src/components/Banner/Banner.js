import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import { apiKey, imgUrl } from '../constants/constants'

function Banner() {
    const [movie,setMovie] = useState()
    useEffect(()=>{
        axios.get(`/trending/all/week?api_key=${apiKey}`).then(response=>{
            setMovie(response.data?.results[0])
        })
    })
  return (
    <div style={{backgroundImage:`url(${movie?imgUrl+movie.backdrop_path:""})`}}>
        <div className='banner'>
            <div className='content'>
                <h2 className='title'>{movie?movie.title:""}</h2>
                <div className='banner-buttons'>
                    <button className='button'><i className='fa fa-play'></i> Play</button>
                    <button className='button'><i className='fa fa-plus'></i> My List</button>
                </div>
                    <h1 className='description'>{movie?movie.overview:""}</h1>
                </div>
            <div className='fade_bottom'></div>
        </div>
    </div>
  )
}

export default Banner
