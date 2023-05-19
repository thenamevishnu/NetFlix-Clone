import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from '../../axios'
import { imgUrl } from '../constants/constants'
import Youtube from "react-youtube"
import { apiKey } from '../constants/constants'

function RowPost(props) {
    const [movie,setMovie] = useState([])
    const [ytId,setYtId] = useState("")
    useEffect(()=>{
        axios.get(props.url).then(response=>{
            setMovie(response.data?.results)
        }).catch(err=>alert("Network Error"))
    },[props.url])
    
    const handleMovie = (id) =>{
        axios.get(`/movie/${id}/videos?api_key=${apiKey}`).then(response=>{
            if(response?.data?.results.length === 0){
                alert("No videos is there!")
            }else{
                setYtId(response?.data?.results[0]?.key)
            }
        }).catch(err=>alert("No videos is there!"))
    }
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movie.map((obj)=>{
                        return(
                            <img key={obj.id} onClick={()=>{handleMovie(obj.id)}} className={props.isSmall ? "poster" : "main-poster"} src={obj?imgUrl+obj.backdrop_path:""} alt={obj?obj.title:""} />
                        );
                    })
                } 
            </div>
               <div>  
                { ytId && <Youtube opts={opts} videoId={ytId}/> } </div>
        </div>
    )
}

export default RowPost
