import Cookies from "universal-cookie";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from 'moment'
import { Link } from "react-router-dom";
import { LionPlayer } from "lion-player";

export default function SearchComp(){
    const cookies = new Cookies();
    const token = cookies.get('token')
    const {q} = useParams();
    console.log(q)
    const url = `http://192.168.1.5:5000/video?query=${q}`

    const[results, setResults]= useState([])

    useEffect(()=>{
        getData()
        
      },[])

const getData = async() =>{
    await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${token}` 
        }  
    })
    .then(response=>{
        setResults(response.data)
    })
} 
console.log(results)
    return(
        <div className="rounded-md col-span-10">
           <div className="flex flex-col gap-5 p-2 bg-gradient-to-tr from-purple-700 to-purple-600 shadow-md">
               {
                  results.length == 0 ? <h1>No hay</h1> :
                  <div className="rounded-md col-span-10">
                    <div className="flex flex-col gap-5 p-2 bg-gradient-to-tr from-purple-700 to-purple-600 shadow-md">
                        {
                            results.map((vid) => {

                                return (
                                    <div className="bg-gray-800 hover:bg-gray-700 shadow-md flex rounded-sm items-center">
                                        <div className="bg-black rounded-tl-sm rounded-tr-sm w-64 flex-shrink-0">
                                            <video src={`http://192.168.1.5:5000/video/download/${vid.videoFile}?channelName=${vid.videoOf.chanelName}#t=1`} className="object-scale-down h-40 w-full"></video>
                                        </div>
                                        <div className="p-2">
                                            <a><Link to={`/vid/${vid.id}`}><a className="text-white hover:underline text-start font-bold text-2xl">{vid.videoTitle}</a></Link></a>
                                            {cookies.get('user').username == vid.videoOf.chanelName ? <Link to="/channel"><p className="text-gray-400 hover:text-white hover:underline text-start text-sm">Subido por: {vid.videoOf.chanelName}</p></Link> : <Link to={`/channeluser/${vid.videoOf.chanelName}`}><p className="text-gray-400 hover:text-white hover:underline text-start text-sm">Subido por: {vid.videoOf.chanelName}</p></Link>}
                                            <p className="text-gray-400 text-start text-sm"><time>{moment(vid.releaseDate).fromNow()}</time></p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
               }
            </div>
        </div>
    )
}