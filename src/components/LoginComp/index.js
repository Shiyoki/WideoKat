import { useState } from "react";
import axios from "axios"
import Cookies from "universal-cookie"
import swal from "sweetalert"

export function LoginComp(){
const cookies = new Cookies();
const url ="http://192.168.1.5:5000/user/login"
console.log(cookies.get('token'))

const [email, setEmail] = useState("");
const [password, SetPassword] = useState("");

const handleEmailChange = ({ target: {value} }) => setEmail(value);
const handlePasswordChange = ({ target: {value} }) => SetPassword(value);

const info ={
    email: email,
    password: password  
        }
console.log(info)


const alertError =()=>{
    swal({
        title: "Error",
        text: "Datos introducidos incorrectamente",
        icon: "error",
        button: "Aceptar",
        timer: "5000"
    })
}

const alertLogin = ()=>{
    swal({
        title: "Bienvenido",
        icon: "success",
        button: "Aceptar",
        timer: "5000"
    })
}


const siginin = async() =>{
    await axios.post(url, info)

    .then(response =>{
        const resp=response.data
        if(response.status == 201){
            cookies.set('token', resp.token, {path: "/"})   
            alertLogin()
            window.location.href="../../../Wideo"
        }               
    })
    .catch(error=>{
        alertError()
        console.log(error.response)
    })  
    
    }
    
    return(
        <div className="flex flex-col gap-5 items-center justify-center h-screen">
            <div className="bg-gradient-to-tr from-purple-700 to-purple-600 rounded-sm shadow-md">
                <form className="p-10">
                    <fieldset className="flex p-5 flex-col gap-3 items-center justify-center">
                        <legend className="text-purple-50 font-bold text-3xl text-center rounded-full p-3 bg-indigo-500 shadow-md">Iniciar Sesion</legend>
                        <label for="emailInput" className="text-purple-50">Correo Electronico</label>
                        <input id="emailInput" className="input-std" type="text" value={email} onChange={handleEmailChange} />
                        <label className="text-purple-50" for="passwordInput">Contrasena</label>
                        <input id="passwordInput" className="input-std" type="password" value={password} onChange={handlePasswordChange} />
                        <div className="pt-10">
                            <a className="px-6 py-3 font-medium text-white rounded-sm focus:outline-none transition ease-in-out duration-300 bg-blue-500 hover:bg-blue-600 cursor-pointer" onClick={siginin}>Entrar</a>
                        </div>
                    </fieldset>
                    <div className="text-center">
                        <a className="text-indigo-300 hover:underline" href="/register">¿No tienes cuenta? Registrate ahora</a>
                    </div>       
                </form>
            </div>
        </div>
    )
}