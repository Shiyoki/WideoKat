import Cookies from "universal-cookie";
import axios from "axios";
import moment from 'moment'
import './styles.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Allvideos(){
    const cookies = new Cookies()
    const token = cookies.get('token')
    const url = "http://192.168.1.5:5000/videos"

    const [vide, SetVideo] = useState([])

    useEffect(()=>{
        getData()
      },[])

    const getData= async()=>{
        await axios.get(url, {
            headers: {
              'Authorization': `Bearer ${token}` 
            }  
          })
            .then(response=>{
             const respuesta = response.data;
             SetVideo(respuesta)
            })
    }
             
    return(
        <section className="col-span-10">
            <div className="bg-gradient-to-tr from-purple-700 to-purple-600 shadow-md rounded-lg">

                <div className="grid grid-cols-12 gap-3 p-3">
                    {
                        vide.map((vid) =>{
                            
                            return (
                                <div className="col-span-3">
                                    <div className="group bg-gray-800 hover:bg-gray-700 shadow-md">
                                        <div className="bg-black rounded-tl-sm rounded-tr-sm flex-shrink-0">
                                            <video className="object-scale-down h-40 w-full" src={`http://192.168.1.5:5000/video/download/${vid.videoFile}?channelName=${vid.videoOf.chanelName}#t=1`}></video>
                                        </div>
                                        <div className="p-2">
                                            <Link to={`/vid/${vid.id}`}><p className="text-white hover:underline text-center truncate font-medium">{vid.videoTitle}</p></Link>
                                            {cookies.get('user').username == vid.videoOf.chanelName ? <Link to="/channel"><p className="text-gray-400 hover:text-white hover:underline text-start text-sm truncate">Subido por: {vid.videoOf.chanelName}</p></Link> : <Link to={`/channeluser/${vid.videoOf.chanelName}`}><p className="text-gray-400 hover:text-white hover:underline text-sm text-start">Subido por: {vid.videoOf.chanelName}</p></Link>}
                                            <p className="text-gray-400 text-start text-sm truncate"><time>{moment(vid.releaseDate).fromNow()}</time></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
   )
}

