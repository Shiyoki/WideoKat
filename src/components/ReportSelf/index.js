import axios from "axios"
import { useEffect, useState } from "react";
import Cookies from "universal-cookie"

export default function ReportSelf(){
const cookies = new Cookies();
const token = cookies.get('token')
const url2 = "http://192.168.1.7:5000/user"

const[data, setData]=useState([])

return(
        <div className="bg-gradient-to-tr from-purple-700 to-purple-600 shadow-md rounded-lg">
            <div className="flex flex-col gap-3 justify-center items-center">
                <div className="w-5/6 mx-auto border-b-4 border-gray-300 p-5 mt-10">
                    <h1 className="text-center text-white font-black text-3xl capitalize">Videos con mas Likes</h1>
                </div>
                <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
                    <thead>
                    <tr class="text-left border-b border-gray-300">
                        <th class="px-4 py-3">Titulo</th>
                        <th class="px-4 py-3">Descripcion</th>
                        <th class="px-4 py-3">Likes</th>
                    </tr>
                    </thead>
                    {
                        cookies.get('user').userChannel.videos.sort((a, b) => b.details.likes - a.details.likes).map(datos=>(
                            <tbody>
                                <tr class="bg-gray-700 border-b border-gray-600">
                                    <td class="px-4 py-3">{datos.videoTitle}</td>
                                    <td class="px-4 py-3">{datos.description}</td>
                                    <td class="px-4 py-3">{datos.details.likes}</td>
                                </tr>
                            </tbody>
                        ))
                    }         
                </table>
            </div> 
        </div>
    )
}
