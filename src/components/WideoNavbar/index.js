import './styles.css'
import Cookies from "universal-cookie"
import swal from "sweetalert"
import Icons from '../icons'
import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export default function WideoNavbar (){
    const cookies = new Cookies()
    const token = cookies.get('token')

    const logout=()=>{
        swal({
            title: "Cerrar sesion",
            text: "Estas seguro que deseas cerrar sesion",
            icon: "warning",
            buttons: ["No", "Si"]
        }).then(respuesta=>{
            if(respuesta){
                cookies.remove('token')
                window.location.href="../"
            }
        })
        
    }

    const [q, setQ] = useState("")
    const handelQuery = ({ target: {value} }) => setQ(value);
    const url = `http://192.168.1.5:5000/video?query=${q}`

  /*  export const SearchConseguida = () =>{
        
       
        await axios.get(url, {
            headers: {
              'Authorization': `Bearer ${token}` 
            }  
          })
        .then(response=>{
            console.log(response.data)
            
        })
    }

*/
    const reload = () =>{
        window.location.reload()
    }
    
    return(    
        <header className="mx-auto">
            <nav className="nav px-5">
                <div className="flex-shrink-0">
                   <a href='/wideo'><img className="w-24 md:w-28" src='https://i.ibb.co/bKFgZrN/Wideo-Kat.png' alt="Wideo-Logo" /></a> 
                </div>
                <div className="p-2">
                    <form className="flex">
                        <input onChange={handelQuery} className="search-input" value={q} placeholder="Busca un video..." type="search" name="q" id="queryUser" />
                        {q == "" ? <a className="search-button-disabled cursor-pointer"><Icons className="fas fa-search" /></a> : <a className="search-button cursor-pointer" onClick={reload}><Link to={`/search/${q}`}><Icons  className="fas fa-search" /></Link></a>}
                        
                    </form>
                </div>
                <a className="p-3 text-gray-300 rounded-sm hover:bg-blue-500 transition ease-in-out duration-300 hover:text-white cursor-pointer font-medium" onClick={logout}>Cerrar sesion</a>
            </nav>
        </header>                      
    )
}