import Cookies from "universal-cookie"
import './style.css'
import moment from 'moment'
import { Link } from "react-router-dom";
import Icons from "../icons";
import axios from "axios";
import swal from "sweetalert"
import { useRef, useState, useEffect } from "react";

const DeleteVideo = (props) => {
    const cookies = new Cookies();
    const deleteVideo = async() => {
        const url = `http://192.168.1.5:5000/video/${props.deleteId}`
        await axios.delete(url, {
            headers: {
            'Authorization': `Bearer ${props.token}`
                }  
            })
            .then(response=>{
                cookies.remove('user')
                cookies.set('user', response.data, {path: "/"})
                window.location.reload()
        })
    }

    return <a onClick={deleteVideo} id='aInput' className="cursor-pointer rounded-full bg-pink-600 hover:bg-red-500 text-white text-lg w-8 h-8 flex items-center justify-center"><Icons className="fas fa-trash" /></a>
}

export default function ChanelInfo(){
    const cookies = new Cookies();
    const token = cookies.get('token')
 
 return(
     <div className="col-span-10">
         <div className="bg-gradient-to-tr from-purple-700 to-purple-600 shadow-md rounded-md">
             <div className="p-3 flex flex-col gap-5">
                    <div className="bg-gray-800 rounded-md h-48 flex items-center justify-between px-10">
                        <div className="group flex items-center">
                            <img className="object-cover w-36 h-36 rounded-full box-border border-2 border-gray-400 bg-white" src={`http://192.168.1.5:5000/user/profile/${cookies.get('user').profilePicture}?channelName=${cookies.get('user').username}`}></img>
                            <div className="px-5">
                                <h2 className="text-3xl font-bold text-white">{cookies.get('user').username}</h2>
                                <h3 className="text-xl font-semibold text-gray-400 capitalize pt-2">{`${cookies.get('user').firstName} ${cookies.get('user').lastName}`}</h3>
                                <p className="text-lg font-semibold text-gray-500 capitalize">{cookies.get('user').userChannel.subscriptions.length} suscriptores</p>
                            </div>
                        </div>

                        <div>
                           <Link to="/stats"><a className="text-purple-50 font-medium text-lg px-10 py-5 rounded-sm bg-indigo-600 hover:bg-indigo-500 transition-colors ease-in duration-300 cursor-pointer"><Icons className="fas fa-chart-line mr-3 text-3xl" /> Estadisticas</a></Link> 
                        </div>
                    </div>
                    
                    <div>
                        <div className="bg-gray-800 rounded-md flex items-center justify-center b-2">
                            <h2 className="text-3xl font-bold text-white p-3 capitalize">Videos subidos</h2>
                        </div>
                        <div className="bg-gray-800 rounded-md flex items-center justify-between mt-1">
                            <div className="grid grid-cols-12 gap-3 p-5">
                                {
                                    cookies.get('user').userChannel.videos.map((vid) =>{
                                        console.log(vid.id)
                                        return (
                                            <div className="col-span-3">
                                                <div className="group bg-indigo-600 hover:bg-indigo-500 shadow-md">
                                                    <div className="bg-black rounded-tl-sm rounded-tr-sm flex-shrink-0">
                                                        <video className="object-scale-down h-40 w-full" src={`http://192.168.1.5:5000/video/download/${vid.videoFile}?channelName=${cookies.get('user').userChannel.chanelName}#t=1`}></video>
                                                    </div>
                                                    <div className="p-2">
                                                        <Link to={`/vid/${vid.id}`}><p className="text-indigo-50 hover:underline text-center truncate font-medium">{vid.videoTitle}</p></Link>
                                                        <p className="text-indigo-300 text-center text-sm truncate"><time>{moment(vid.releaseDate).fromNow()}</time></p>
                                                    </div>
                                                    <div className="flex justify-between items-center px-5 pb-3">
                                                       <Link to={`/editvid/${vid.id}`}><a className="text-indigo-200 hover:text-indigo-50 hover:underline font-medium cursor-pointer">Editar</a></Link> 
                                                        <DeleteVideo deleteId={vid.id} token={token} />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
             </div>
     </div>
 )

}