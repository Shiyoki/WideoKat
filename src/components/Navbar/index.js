import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Button } from "./NavbarElements"
import { Link } from "react-router-dom"
import "./styles.css"
import { useState } from "react"
import { Modal } from "../Modal"
import { Modall } from "../Modal/modalsign"

export default function Navbar (){
 
    const[showModal, setShowModal] = useState(false)
    const[showModall, setShowModall] = useState(false)

    const openModal=()=>{
        setShowModal(prev => !prev)    
    }
    const openModall=()=>{
        setShowModall(prev => !prev)    
    }

    return( 
        <>    
            <header className="mx-auto">
                <nav className="nav px-3">
                    <div className="flex-shrink-0">
                    <a href='/'><img className="w-24 md:w-28" src='https://i.ibb.co/bKFgZrN/Wideo-Kat.png' alt="Wideo-Logo" /></a>
                    </div>
                    <div className="flex gap-3">
                        <Link to="/register"><a className="p-3 text-white rounded-sm focus:outline-none transition ease-in-out duration-300 bg-purple-500 hover:bg-purple-700">Registrarse</a></Link>
                        <Link to="/login"><a className="p-3 text-gray-300 rounded-sm hover:bg-blue-500 transition ease-in-out duration-300 hover:text-white">Iniciar Sesion</a></Link>
                    </div>
                </nav>  
            </header>      
            
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <Modall showModall={showModall} setShowModall={setShowModall} />
        </>           
    )
}