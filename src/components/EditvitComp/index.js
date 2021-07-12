import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import swal from "sweetalert";

export default function EditvitComp(){
    const cookies = new Cookies();
    const { id } = useParams() 
    const videoData = cookies.get('user').userChannel.videos.find(elem => elem.id == id)

    const [title, setTitle] = useState(videoData.videoTitle);
    const [description, setDescription] = useState(videoData.description);
    
    const handleTitleChange = ({ target: {value} }) => setTitle(value);
    const handleDescpChange = ({ target: {value} }) => setDescription(value);

    const edit = {
        videoTitle: title,
        description: description
    }

    const handleEventEdit = async () =>{  
        const url =`http://192.168.1.5:5000/video/${id}`  
        await axios.put(url, edit,{
            headers: {
              'Authorization': `Bearer ${cookies.get('token')}` 
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
            cookies.set('user', response.data, {path: "/"})
            window.location.href="../wideo"    
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
                                <legend className="text-white font-bold text-2xl">Actualizar Video</legend>
                                <label value for="titleInput" className="text-white mt-3">Titulo del video</label>
                                <input id="titleInput" placeholder="Introudce un titulo..." className="input-std" type="text" value={title} onChange={handleTitleChange} />
                                <label className="text-white mt-3" for="areaInput">Descripcion</label>
                                <textarea id="areaInput" placeholder="Introduce una descripcion..." className="input-std resize-none h-32" value={description} onChange={handleDescpChange}></textarea>
                                <div className="mt-5">
                                    <a onClick={handleEventEdit} className="px-6 py-3 font-medium text-white rounded-sm focus:outline-none transition ease-in-out duration-300 bg-blue-500 hover:bg-blue-600 cursor-pointer">Actualizar Wideo</a>
                                </div>
                            </div>

                            <div className="bg-black border border-purple-600 flex flex-col items-center justify-center w-96 rounded-sm">
                                <video className="object-scale-down" src={`http://192.168.1.5:5000/video/download/${videoData.videoFile}?channelName=${cookies.get('user').userChannel.chanelName}#t=1`}></video>
                            </div>
                            </fieldset>                
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}