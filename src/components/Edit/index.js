import axios from "axios";
import { useRef, useState } from "react";
import "./styles.css"
import Cookies from "universal-cookie";
import swal from "sweetalert"
import Icons from "../icons";

export function Edit(){
    const cookies = new Cookies()
    const token = cookies.get('token')
    const url ="http://192.168.1.5:5000/user"
    const inputRef = useRef()

    const[username, setUserName]= useState(cookies.get('user').username)
    const[name, setName] = useState(cookies.get('user').firstName);
    const[lastName, setLastName] = useState(cookies.get('user').lastName);
    const [file, setFile] = useState(null);
    

    const handelUsernameChange = ({ target: {value} }) => setUserName(value);
    const handleNameChange = ({ target: {value} }) => setName(value);
    const handleLastNameChange = ({ target: {value} }) => setLastName(value);
    const handleFileChange = e => {
            setFile(e)
        }
        
        /*const Edituser = {
            username:username,
            firstName:name,
            lastName:lastName         
        }*/
        
        //console.log(Edituser)
        
        
const handleEventEdit = async () =>{
    const Edituser = new FormData()
    Edituser.append('username', username)
    Edituser.append('firstName', name)
    Edituser.append('lastName', lastName)
    Edituser.append('profilePicture', file)
    
    await axios.put(url, Edituser,{
        headers: {
          'Authorization': `Bearer ${token}` 
        }})    
    .then(response=>{
        console.log(response.data)  
    swal({
        title: "Actualizado",
        text: "Datos actualizados correctamente",
        icon: "success",
        button: "Aceptar",
        timer: "5000"
    })
        cookies.remove('user')
        cookies.set('user', response.data)
        window.location.reload()    
    })
    .catch(error=>{
        swal({
            title: "Error",
            text: "Algo ha salido mal",
            icon: "error",
            button: "Aceptar",
            timer: "5000"
        })
        console.log(error)
    })  
 }


return(
    <div className="col-span-10">
        <div className="bg-gradient-to-tr from-purple-700 to-purple-600 shadow-md rounded-md">
            <div className="flex items-center justify-center p-5">
                <div className="bg-gray-800 rounded-md flex items-center w-5/12 justify-center p-5">
                    <form>
                        <fieldset className="flex flex-col items-center justify-center gap-5">
                            <div>
                                <legend className="text-white font-bold text-2xl">Actualizar Información</legend>
                            </div>
                            <div className="bg-purple-500 rounded-md h-28 w-96 flex items-center justify-between px-5">
                                <div className="flex items-center gap-2">
                                    <div className='relative'>
                                        <img className=" object- w-24 h-24 rounded-full box-border border-2 border-gray-400 bg-white" src={`http://192.168.1.5:5000/user/profile/${cookies.get('user').profilePicture}?channelName=${cookies.get('user').username}`}></img>
                                        <a onClick={(e) => inputRef.current.click()}className="absolute bottom-0 right-0 rounded-sm text-gray-700 text-md py-1 px-2 focus:outline-none transition ease-in-out duration-300 bg-blue-200 hover:bg-blue-400 cursor-pointer" src={`http://192.168.1.5:5000/user/profile/${cookies.get('user').profilePicture}?channelName=${cookies.get('user').username}`}><Icons className="fas fa-camera" /></a>
                                    </div>
                                    <input className="hidden" type="file" ref={inputRef} onChange={(e)=>handleFileChange(e.target.files[0])} />
                                    <div className="">
                                        <label className="text-purple-50 font-medium text-lg" htmlFor="inputFile">Actualizar Foto</label>
                                    </div>
                                </div>
                            </div>
                            <label className="text-white" htmlFor="usernameInput">Nombre de usuario</label>
                            <input onChange={handelUsernameChange} value={username} className="input-std" type="text" id="usernameInput" />
                            <label className="text-white" htmlFor="fnInput">Nombre</label>
                            <input onChange={handleNameChange} value={name} className="input-std" type="text" id="fnInput" />
                            <label className="text-white" htmlFor="lnInput">Apellido</label>
                            <input onChange={handleLastNameChange} value={lastName} className="input-std" type="text" id="lnInput" />
                            <div className="mt-5">
                                    <a className="px-6 py-3 font-medium text-white rounded-sm focus:outline-none transition ease-in-out duration-300 bg-blue-500 hover:bg-blue-600 cursor-pointer" onClick={handleEventEdit}>Actualizar</a>
                                </div>
                        </fieldset> 
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}