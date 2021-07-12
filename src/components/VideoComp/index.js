import Icons from "../icons";
import { useParams } from "react-router-dom"
import axios from "axios";
import Cookies from "universal-cookie";
import moment from "moment";
import { useEffect, useState, useCallback, useRef } from "react";
import { LionPlayer, usePlayer } from 'lion-player';
import 'lion-player/dist/lion-skin.min.css';
import { Link } from "react-router-dom";
import videojs from "video.js";

function PawGift(props){
    const likeurl = `http://192.168.1.5:5000/video/like`
    const[button, setButton]=useState([])

    useEffect(()=>{  
        setButton([props.video])
    },[])

    const paws={
        id: props.id
    }

    const handlePawEvent = async() =>{
        await axios.put(likeurl, paws, {
            headers: {
              'Authorization': `Bearer ${props.token}` 
            }})    
        .then(response=>{
            setButton([response.data])
         }
     )
     .catch(error=>{
        alert('error')
        console.log(error.data)
        })  
    }
return(
    <>
    {button.map((video)=>{
        return  <button type="button" onClick={handlePawEvent} className="text-purple-300 font-medium text-lg p-3 rounded-sm hover:bg-pink-600 hover:text-purple-50 transition ease-in-out duration-300 cursor-pointer"><Icons className="fas fa-paw" />Paw Gift {video.details.likes}</button>
    })}
    </>
    )   

} 

function Subscribirse(props){
    const cookies = new Cookies();
    const token = cookies.get('token')

    const subsurl = `http://192.168.1.5:5000/user/subscription`
    const deleteurl = `http://192.168.1.5:5000/user/subscription/${props.channelId}`
  

    const edit = {
        channelId: props.channelId
    }

    const handleSubs = async() =>{
        if (!(cookies.get('user').subscribedTo.find(elem => elem.id == props.channelId))){

            await axios.put(subsurl, edit,{
                headers: {
                  'Authorization': `Bearer ${token}` 
                }})    
            .then(response=>{
                console.log(response.data)  
                cookies.remove('user')
                cookies.set('user', response.data, {path: "/"})
                window.location.reload()
            })
            .catch(error=>{
                
                console.log(error)
            })  
        }else{
            await axios.delete(deleteurl,{
                headers: {
                  'Authorization': `Bearer ${token}` 
                }})    
            .then(response=>{
                console.log(response.data)  
                cookies.remove('user')
                cookies.set('user', response.data, {path: "/"})
                window.location.reload()
            })
            .catch(error=>{
                
                console.log(error)
            })  
        }
    }
    
    return(
        <>
        {
         !(cookies.get('user').subscribedTo.find(elem => elem.id == props.channelId)) ? <a onClick={handleSubs} className="bg-blue-400 text-purple-50 font-medium text-lg p-3 rounded-sm hover:bg-blue-500 transition-colors ease-in duration-300 cursor-pointer">Suscribirse</a> : <a onClick={handleSubs} className="bg-blue-700 text-purple-50 font-medium text-lg p-3 rounded-sm hover:bg-blue-800 transition-colors ease-in duration-300 cursor-pointer">Suscrito</a>
        }    
        </>
    )
 }


export default function VideoComp(){

    const cookies = new Cookies();
    const token = cookies.get('token')
    const {id} = useParams();
    const url = `http://192.168.1.5:5000/video/${id}`  
    const [watch, setWatch]= useState([])
    
    useEffect(()=>{  
        getVideo()
        console.log()
    },[])


    const getVideo = async()=>{
        await axios.get(url,{
            headers: {
            'Authorization': `Bearer ${token}` 
            }  
        })
        .then(response=>{
            setWatch([response.data])
        }   
     )    
    }
  
    return(
        <div className="col-span-8 flex flex-col gap-2">
            {
                watch.map((video) => {

                    return (
                        <>
                            <div className="overflow-hidden rounded-md">
                                <LionPlayer id="player" src={`http://192.168.1.5:5000/video/download/${video.videoFile}?channelName=${video.videoOf.chanelName}`} autoplay aspectRatio="16:9" />
                            </div>
                            <div className="bg-gradient-to-tr from-purple-700 to-purple-600 shadow-md rounded-md p-3">
                                <div className="border-b-2 border-blue-300">
                                    <h1 className="text-white font-bold text-3xl text-center">{video.videoTitle}</h1>
                                    <p className="p-3 text-purple-300 font-medium text-lg">{moment(video.releaseDate).fromNow()}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="group pt-2 px-3 flex">
                                        <img className="object-cover w-16 rounded-full box-border border-2 border-blue-300 group-hover:border-blue-400 transition ease-in-out duration-300" src={`http://192.168.1.5:5000/user/profile/${video.videoOf.owner.profilePicture}?channelName=${video.videoOf.chanelName}`}></img>
                                        <div className="p-2">
                                        {cookies.get('user').username == video.videoOf.chanelName ? <Link to="/channel"><p className="text-purple-300 font-medium text-xl group-hover:underline group-hover:text-purple-50 cursor-pointer transition ease-in-out duration-300">Subido por: {video.videoOf.chanelName}</p></Link> : <Link to={`/channeluser/${video.videoOf.chanelName}`}><p className="text-purple-300 font-medium text-xl group-hover:underline group-hover:text-purple-50 cursor-pointer transition ease-in-out duration-300">Subido por: {video.videoOf.chanelName}</p></Link>}
                                            <p className="text-purple-300 font-light text-sm">{video.videoOf.subscriptions.length} suscriptores</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                       <PawGift id={video.id} token={token} video={video}/>
                                       {cookies.get('user').username == video.videoOf.chanelName ? <span></span> : <Subscribirse channelId={video.videoOf.id} />}                                    
                                    </div>
                                </div>
                                <div className="bg-purple-500 rounded-sm p-3 mt-4">
                                    <p className="text-white break-normal text-justify tet-md">{video.description}</p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}