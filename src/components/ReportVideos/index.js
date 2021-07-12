import axios from "axios"
import { useEffect, useState } from "react";
import Cookies from "universal-cookie"

export default function ReportVideos(){
const cookies = new Cookies();
const token = cookies.get('token')
const url ="http://192.168.1.5:5000/videos/ordered"

const[data, setData]=useState([])

useEffect(()=>{
    getData()
  },[])

const getData = async() =>{
    await axios.get(url)

    .then(response=>{
     console.log(response.data)
     setData(response.data)
      })
  }
    return(
        <div className="bg-gradient-to-tr from-purple-700 to-purple-600 shadow-md rounded-lg">
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="w-5/6 mx-auto border-b-4 border-gray-300 p-5 mt-10">
              <h1 className="text-center text-white font-black text-3xl">Reporte de Videos</h1>
            </div>
          <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
            <thead>
              <tr class="text-left border-b border-gray-300">
                <th class="px-4 py-3"></th>
                <th class="px-4 py-3">Titulo</th>
                <th class="px-4 py-3">Descripcion</th>
                <th class="px-4 py-3">Canal</th>
                <th class="px-4 py-3">Publicacion</th>
                <th class="px-4 py-3">Reproducciones</th>
                <th class="px-4 py-3">Likes</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(datos=>(
                  <tr class="bg-gray-700 border-b border-gray-600">  
                        <td class="px-4 py-3">#{datos.id}</td>
                        <td class="px-4 py-3">{datos.videoTitle}</td>
                        <td class="px-4 py-3">{datos.description}</td>
                        <td class="px-4 py-3">{datos.videoOf.chanelName}</td>
                        <td class="px-4 py-3">{datos.releaseDate}</td>
                        <td class="px-4 py-3">{datos.details.reproductions}</td>
                        <td class="px-4 py-3">{datos.details.likes}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          </div>          
        </div>
    )
}