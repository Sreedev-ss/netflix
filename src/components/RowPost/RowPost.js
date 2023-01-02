import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { baseUrl, imageUrl, API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [id, setId] = useState("")

    //Fetching data according to url
    useEffect(() => {
        axios.get(props.url).then(res => {
            setMovies(res.data.results)
        }).catch(err => {
           console.log(err?.message);
        })
    }, [])

    //Youtube Player Size
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    //Function for playing movie trailer according to selection
    const handleMovie = (id) => {
        axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res) => {
            if (res.data.results.length !== 0) {
                setId(res.data.results[0])
            } else {
                console.log("No data");
            }
        })
    };

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies?.map((obj) =>
                    <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'posterImgSmall' : 'posterImg'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                )}
            </div>
            {id && < Youtube opts={opts} videoId={id.key} />}
        </div>
    )
}

export default RowPost
