import React, { useContext, useEffect, useState } from 'react'
import "./RowPost.css"
import axios from '../../axios'
import { imgUrl } from '../constants/constants'
import { apiKey } from '../constants/constants'
import Youtube from "react-youtube"
import { AppContext } from '../../context'

function RowPost(props) {

    const [movie,setMovie] = useState([])
    const [ytId,setYtId] = useState("")
    const [streaming,streamMovie] = useState(null)
    const [opend,setOpened] = useContext(AppContext)

    useEffect(()=>{
        axios.get(props.url).then(response=>{
            setMovie(response.data?.results)
        }).catch(err=>alert("Network Error"))
    },[props.url])

    const handleMovie = (id) =>{
        axios.get(`/movie/${id}/videos?api_key=${apiKey}`).then(response=>{
            if(response?.data?.results.length === 0){
                setOpened(false)
                alert("No videos is there!")
            }else{
                setYtId(response?.data?.results[0]?.key)
            }
        }).catch(err=>{setOpened(false); alert("No videos is there!")})
    }

    const removeVideo = ()=>{
        setYtId(null)
        setOpened(false)
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
                            <div>
                                <img key={obj.id} onClick={()=>{ if(!opend){handleMovie(obj.id); setOpened(obj.title); streamMovie(obj) }else{ alert(opend + " is streaming!"); };}} className={props.isSmall ? "poster" : "main-poster"} src={obj?imgUrl+obj.backdrop_path:""} alt={obj?obj.title:""} />
                            </div>
                        );
                    })
                } 
            </div>   
            { ytId && (
                <div className="stream" style={{position:"fixed"}}>
                    <div className="video">
                    <span onClick={()=>removeVideo()} className='fa fa-close close-btn'></span>
                    <span className='movie-title'>{streaming.title}</span>
                        <Youtube opts={opts} videoId={ytId} /> 
                    </div>
                </div>
                )
            }
            </div>
    )
}

export default RowPost
