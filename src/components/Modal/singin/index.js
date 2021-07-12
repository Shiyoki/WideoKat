import { useState } from "react";
import "./styles.css"
import axios from "axios"
import Cookies from "universal-cookie"

export function Singin(){
const cookies = new Cookies();
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

////////////////////////////////////////////////////////////////
const login = async() =>{
    const url ="http://192.168.1.7:5000/user/login"
    await axios.post(url, info)
    .then(response =>{
        const resp=response.data
        alert('aaa')
        console.log(response.data)
        cookies.set('token', resp.token, {path: "/"})  
        console.log(cookies.get('token'))  
        alert(cookies.get('token'))
        if(cookies.get('token') != null){
            alert('a')
            console.log('aqui toy')
            window.location.href="../../../Wideo"
        }else{
            alert('Error!')
        }
           
    })
    .catch(error=>{
        console.log(error.response)
    })  
    
    }
    
    return(
    <div className="text-center" >
        <form>
            <fieldset>
                <legend className="fs-2 text-light">Iniciar Sesion</legend>
                <label for="emailInput" className="text-light">Correo Electronico</label>
                <input id="emailInput" className="mx-auto d-block form-control custom-control bg-secondary text-light" type="text" value={email} onChange={handleEmailChange} />
                <label className="mt-3 text-light" for="passwordInput">Contrasena</label>
                <input id="passwordInput" className="mx-auto d-block form-control custom-control bg-secondary text-light" type="password" value={password} onChange={handlePasswordChange} />
                <button className="d-block mx-auto mt-3 button" onClick={login}>Entrar</button>
            </fieldset>       
         </form>
    </div>
    )
}