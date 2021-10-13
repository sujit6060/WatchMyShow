import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { img_300, unavailable } from '../../config/Config'
import './SingleContent.css'
import Button from '@mui/material/Button';
import VideocamIcon from '@mui/icons-material/Videocam';

function SingleContent({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average
}) {
    const [video, setvideo] = useState([])

    const FetchVideos = () => {
        axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=2e49c21a38f4f29524d67a27bf371648&language=en-US&include_adult=false`).then((data) => {

            setvideo(data.data.results[0]?.key);
            
        })
    }
    
    useEffect(() => {
        
        FetchVideos();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="media">

            <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className="title">{title}</b>
            <span className="subTitle" >

                {media_type === 'tv' ? "TvShow" : "Movie"}
                <span className="subTitle"><i className="fas fa-star"></i> . {vote_average}</span>
            </span>
            
            <Button variant="outlined" color="error" href={`https://www.youtube.com/watch?v=${video}`}>Watch Trailer</Button>
        </div>
    )
}

export default SingleContent
