import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from '../../axios'
import { imgUrl } from '../constants/constants'
import { apiKey } from '../constants/constants'
import Youtube from "react-youtube"

function RowPost(props) {

    const [movie,setMovie] = useState([])
    const [ytId,setYtId] = useState("")
    const [streaming,nowStreaming]= useState(null)

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

    const showMovie = (obj) =>{
        nowStreaming(obj)
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
                                <img key={obj.id} onClick={()=>{ handleMovie(obj.id); showMovie(obj)}} className={props.isSmall ? "poster" : "main-poster"} src={obj?imgUrl+obj.backdrop_path:""} alt={obj?obj.title:""} />
                            </div>
                        );
                    })
                } 
            </div>   
            { ytId && (
                <div className='stream' style={{position:"fixed"}}>
                
                <div>
                    <Youtube opts={opts} videoId={ytId} />  
                    
                </div>
                <div className='text-left margin'>
                    <h1 className='title-color'>{streaming.title}</h1>
                    <h3>{streaming.overview}</h3>
                </div>
                <span onClick={()=>setYtId(null)} className='fa fa-close close-btn'></span>
                </div>
                )
            }
            </div>
    )
}

export default RowPost
