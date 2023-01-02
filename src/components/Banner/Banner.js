import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'

function Banner() {
    const [movie, setMovie] = useState()
    
    //API for fetching movie for Banner
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => {

            //picking random banner on each time this function calls
            let random = Math.floor(Math.random() * 20)
            setMovie(res.data.results[random]);
        })
    }, [])
    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }} className='banner'>
            <div className="content">
                <h1 className="title">{movie ? movie.title : ""}</h1>
                <div className="banner_button">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
