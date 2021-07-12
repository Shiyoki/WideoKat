import Cookies from "universal-cookie";
import axios from "axios";
import moment from 'moment'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LionPlayer } from "lion-player";

export default function VideosVert(){
    const cookies = new Cookies()
    const token = cookies.get('token')
    
    const [vide, SetVideo] = useState([])

    useEffect(()=>{
        getData()
      },[])

    const getData= async()=>{
      const url = "http://192.168.1.5:5000/videos"
        await axios.get(url, {
            headers: {
              'Authorization': `Bearer ${token}` 
            }  
          })
            .then(response=>{
             const respuesta = response.data;
             SetVideo(respuesta)

                /*cookies.set('vid', respuesta)*/
            })
    }

    const reload = async() =>{
      window.location.reload()
    }
       
    return(
        <aside className="rounded-md col-span-4">
           <div className="flex flex-col gap-5 p-2 bg-gradient-to-tr from-purple-700 to-purple-600 shadow-md">
               {
                  vide.map((vid) => {

                     return (
                           <div className="bg-gray-800 hover:bg-gray-700 shadow-md flex rounded-sm items-center">
                              <div className="bg-black rounded-tl-sm rounded-tr-sm w-48 flex-shrink-0">
                              <video src={`http://192.168.1.5:5000/video/download/${vid.videoFile}?channelName=${vid.videoOf.chanelName}#t=1`} className="object-scale-down h-36 w-full"></video>
                              </div>
                              <div className="p-2">
                                 <a onClick={reload}><Link to={`/vid/${vid.id}`}><a className="text-white hover:underline text-start font-medium">{vid.videoTitle}</a></Link></a>
                                 {cookies.get('user').username == vid.videoOf.chanelName ? <Link to="/channel"><p className="text-gray-400 hover:text-white hover:underline text-start text-sm">Subido por: {vid.videoOf.chanelName}</p></Link> : <Link to={`/channeluser/${vid.videoOf.chanelName}`}><p className="text-gray-400 hover:text-white hover:underline text-start text-sm">Subido por: {vid.videoOf.chanelName}</p></Link>}
                                 <p className="text-gray-400 text-start text-sm"><time>{moment(vid.releaseDate).fromNow()}</time></p>
                              </div>
                           </div>
                     )
                  })
               }
            </div>
        </aside>
   )
}