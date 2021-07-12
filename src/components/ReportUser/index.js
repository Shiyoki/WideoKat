import axios from "axios"
import { useEffect, useState } from "react";
import Cookies from "universal-cookie"

export default function ReportUser(){
const cookies = new Cookies();
const token = cookies.get('token')
const url ="http://192.168.1.5:5000/users"

const[data, setData]=useState([])

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
     setData(response.data)
      })
  }

return(
  <div className="bg-gradient-to-tr from-purple-700 to-purple-600 shadow-md rounded-lg">
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="w-5/6 mx-auto border-b-4 border-gray-300 p-5 mt-10">
              <h1 className="text-center text-white font-black text-3xl">Reporte de Usuarios</h1>
            </div>
          <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
            <thead>
              <tr class="text-left border-b border-gray-300">
                <th class="px-4 py-3"></th>
                <th class="px-4 py-3">Usuario</th>
                <th class="px-4 py-3">Nombre</th>
                <th class="px-4 py-3">Apellido</th>
                <th class="px-4 py-3">Sexo</th>
                <th class="px-4 py-3">Correo</th>
                <th class="px-4 py-3">Suscriptores</th>
                <th class="px-4 py-3">Videos Subidos</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(datos=>(
                  <tr class="bg-gray-700 border-b border-gray-600">  
                        <td class="px-4 py-3">#{datos.id}</td>
                        <td class="px-4 py-3">{datos.username}</td>
                        <td class="px-4 py-3">{datos.firstName}</td>
                        <td class="px-4 py-3">{datos.lastName}</td>
                        <td class="px-4 py-3">{datos.sex.sexName}</td>
                        <td class="px-4 py-3">{datos.email}</td>
                        <td class="px-4 py-3">{datos.userChannel.subscriptions.length}</td>
                        <td class="px-4 py-3">{datos.userChannel.videos.length}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          </div>          
        </div>
)
}