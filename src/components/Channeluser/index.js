import { useParams } from "react-router-dom"
import Cookies from "universal-cookie"
import axios from "axios";
import { useState, useEffect } from "react";
import moment from 'moment'
import { Link } from "react-router-dom";



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


export default function Channeluser(){

    const cookies = new Cookies();
    const token = cookies.get('token')
    const {chanelName} = useParams();
    const url = `http://192.168.1.5:5000/channel/${chanelName}`
    const [userInfo, SetUsetInfo] = useState([])

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
            console.log(response.data)
            SetUsetInfo([response.data])
         /*cookies.set('info', response.data)*/
        })
    }
 

  return(
    <div className="col-span-10">
      {
        userInfo.map((channel)=>{
          return(
            <div className="bg-gradient-to-tr from-purple-700 to-purple-600 shadow-md rounded-md p-3 flex flex-col gap-5">
              <div className="bg-gray-800 rounded-md h-48 flex items-center justify-between px-10">
                <div className="group flex items-center">
                    <img className="object-cover w-36 h-36 rounded-full box-border border-2 border-gray-400 bg-white" src={`http://192.168.1.5:5000/user/profile/${channel.owner.profilePicture}?channelName=${channel.chanelName}#t=1`}></img>
                    <div className="px-5">
                        <h2 className="text-3xl font-bold text-white">{channel.chanelName}</h2>
                        <h3 className="text-xl font-semibold text-gray-400 capitalize pt-2">{channel.subscriptions.length} Suscripciones</h3>
                    </div>
                </div>

                <div>
                  <Subscribirse channelId={channel.id} />
                </div>
             </div>
             
             <div>
                <div className="bg-gray-800 rounded-md flex items-center justify-center b-2">
                    <h2 className="text-3xl font-bold text-white p-3 capitalize">Videos subidos</h2>
                </div>
                <div className="bg-gray-800 rounded-md flex items-center justify-between mt-1">
                <div className="grid grid-cols-12 gap-3 p-5">
                    {
                        channel.videos.map((vid) =>{
                            const user = cookies.get('username')
                            
                            return (
                                <div className="col-span-3">
                                    <div className="group bg-indigo-600 hover:bg-indigo-500 shadow-md">
                                        <div className="bg-black rounded-tl-sm rounded-tr-sm flex-shrink-0">
                                            <video className="object-scale-down h-40 w-full" src={`http://192.168.1.5:5000/video/download/${vid.videoFile}?channelName=${channel.chanelName}`}></video>
                                        </div>
                                        <div className="p-2">
                                            <Link to={`/vid/${vid.id}`}><p className="text-indigo-50 hover:underline text-center truncate font-medium">{vid.videoTitle}</p></Link>
                                            <p className="text-indigo-300 text-center text-sm truncate"><time>{moment(vid.releaseDate).fromNow()}</time></p>
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
        )
      })
    }
    </div>      
  )
}