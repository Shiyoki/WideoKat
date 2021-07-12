import { useRef, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import './style.css'
import Icons from "../icons";
import swal from "sweetalert"

export function UploadComp(){

    const cookies = new Cookies(); 
    const token = cookies.get('token')

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const inputRef = useRef()
    
    const handleTitleChange = ({ target: {value} }) => setTitle(value);
    const handleDescpChange = ({ target: {value} }) => setDescription(value);

    const handleFileChange = (e) => {
        setFile(e)
    }

    const url = "http://192.168.1.5:5000/video"

    const subir = async () =>{

        const info = new FormData()
        info.append('videoTitle', title)
        info.append('description', description)
        info.append('videoFile', file)

        await axios.post(url, info, {
            headers: {
            'Authorization': `Bearer ${token}`
            }  
        })
        .then(response=>{
            console.log(response.data)  
        swal({
            title: "Subido",
            text: "Video subido correctamente",
            icon: "success",
            button: "Aceptar",
            timer: "5000"
        })
        window.location.href="../../wideo"
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
                    
                    <div className="bg-gray-800 custom-size rounded-md flex items-center justify-center">
                        <form className="">
                            <fieldset className="flex items-center gap-5">
                            <div className="flex flex-col items-center gap-3">
                                <legend className="text-white font-bold text-2xl">Subir video</legend>
                                <label for="titleInput" className="text-white mt-3">Titulo del video</label>
                                <input id="titleInput" placeholder="Introudce un titulo..." className="input-std" type="text" value={title} onChange={handleTitleChange} />
                                <label className="text-white mt-3" for="areaInput">Descripcion</label>
                                <textarea id="areaInput" placeholder="Introduce una descripcion..." className="input-std resize-none h-32" value={description} onChange={handleDescpChange}></textarea>
                                <div className="mt-5">
                                    <a className="px-6 py-3 font-medium text-white rounded-sm focus:outline-none transition ease-in-out duration-300 bg-blue-500 hover:bg-blue-600 cursor-pointer" onClick={subir}>Subir Wideo</a>
                                </div>
                            </div>

                            <div className="bg-purple-600 flex flex-col items-center justify-center w-96 h-96 rounded-sm">
                                <input ref={inputRef} className="hidden" type="file" onChange={(e)=>handleFileChange(e.target.files[0])} />
                                <a onClick={(e) => inputRef.current.click()} for="fileInput" className="rounded-full text-gray-700 text-6xl p-8 focus:outline-none transition ease-in-out duration-300 bg-blue-200 hover:bg-blue-400 cursor-pointer"><Icons className="fas fa-upload" /></a>
                                <label className="text-white font-medium text-xl mt-2">Seleccionar video</label>
                            </div>
                            </fieldset>                
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}