import { useState } from "react";
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import axios from "axios"
import swal from "sweetalert"

export function RegisterComp(){
    const[username, setUserName]= useState("")
    const[name, setName] = useState("");
    const[lastName, setLastName] = useState("");
    const[sex, setSex ]= useState("")
    const[email, setEmail] = useState("");
    const[dDate, setDate] = useState(new Date())
    const[password, setPassword] = useState("");
    const[verifyPassword, setVerifyPassword] = useState("");

    const handelUsernameChange = ({ target: {value} }) => setUserName(value);
    const handleNameChange = ({ target: {value} }) => setName(value);
    const handleLastNameChange = ({ target: {value} }) => setLastName(value);
    const handleSexChange = ({ target: {value} }) => setSex(value);
    const handleEmailChange = ({ target: {value} }) => setEmail(value);
    const handlePasswordChange = ({ target: {value} }) => setPassword(value);
    const handleVerifyPasswordChange = ({ target: {value} }) => setVerifyPassword(value);

    const alertErrorSex =()=>{
        swal({
            title: "Error",
            text: "Seleccione correctamente su sexo",
            icon: "error",
            button: "Aceptar",
            timer: "5000"
        })
    }

    const alertErrorPass =()=>{
        swal({
            title: "Error",
            text: "La contrasena no coincide",
            icon: "error",
            button: "Aceptar",
            timer: "5000"
        })
    }

    const alertRegister = ()=>{
        swal({
            title: "Enhorabuena",
            text: "Te has registrado con exito",
            icon: "success",
            button: "Aceptar",
            timer: "5000"
        })
    }

    const user = {
                username:username,
                firstName:name,
                lastName:lastName, 
                sexId: parseInt(sex), 
                email: email, 
                password: password,
                 birthDate: dDate
                }
    console.log(user)
   
    //////////////////////////////////////////////////////POST///////////////////////////////////////////////////////
    
    const url ="http://192.168.1.5:5000/user"

    const handleEventSignUp = async () =>{
        if(sex == 0){
          alertErrorSex()
        }
        else if( verifyPassword != password){
          alertErrorPass()
        } else{
            await axios.post(url, user)
            .then(response=>{
               if(response.status == 201){
                   alertRegister()
                   window.location.href="../"
               }else{
                   swal('Algo ha salido mal')
               }
            })
            .catch(error=>{
                console.log(error)
            })  
         }
        }
       
    //////////////////////////////////////////////////////MODAL////////////////////////////////////////////////////////
    return(
        <div className="flex flex-col gap-5 items-center justify-center h-screen">
            <h1 className="p-5 text-3xl text-white font-bold uppercase rounded-2xl bg-purple-500 shadow-md">Registrarse</h1>
            <div className="bg-gradient-to-tr from-purple-700 to-purple-600 flex rounded-sm shadow-md">
                <div className="rounded-tl-sm rounded-bl-sm bg-indigo-500 w-60 border-r-2 border-blue-100">
                    <div className="text-right p-3 text-lg">
                        <label className="text-indigo-200 font-bold hover:text-purple-50 transition ease-in-out duration-300" for="userInput">Usuario</label>
                    </div>
                    <div className="text-right p-3 text-lg">
                        <label className="text-indigo-200 font-bold hover:text-purple-50 transition ease-in-out duration-300" for="nameInput">Nombre</label>  
                    </div>
                    <div className="text-right p-3 text-lg">
                        <label className="text-indigo-200 font-bold hover:text-purple-50 transition ease-in-out duration-300" for="lastNameInput">Apellido</label>
                    </div>
                    <div className="text-right p-3 text-lg">
                        <label className="text-indigo-200 font-bold hover:text-purple-50 transition ease-in-out duration-300">Sexo</label>
                    </div>
                    <div className="text-right p-3 text-lg">
                        <label className="text-indigo-200 font-bold hover:text-purple-50 transition ease-in-out duration-300" for="dateInput">Fecha de nacimiento</label>
                    </div>
                    <div className="text-right p-3 text-lg">
                        <label className="text-indigo-200 font-bold hover:text-purple-50 transition ease-in-out duration-300" for="emailInput">Correo electronico</label>
                    </div>
                    <div className="text-right p-3 text-lg">
                        <label className="text-indigo-200 font-bold hover:text-purple-50 transition ease-in-out duration-300" for="passwordInput">Contrasena</label>
                    </div>
                    <div className="text-right p-3 text-lg">
                        <label className="text-indigo-200 font-bold hover:text-purple-50 transition ease-in-out duration-300" for="verifyPasswordInput">Verificar Contrasena</label>
                    </div>
                </div>
                <div className="p-3 w-96">
                    <form className="">
                        <fieldset className="flex flex-col gap-4">
                            <input className="input-std" type="text" placeholder="username" value={username} id="userInput" onChange={handelUsernameChange} />
                            <input className="input-std" type="text" placeholder="example" value={name} id="nameInput" onChange={handleNameChange} />
                            <input className="input-std" type="text" placeholder="example" value={lastName} id="lastNameInput" onChange={handleLastNameChange} />
                            <div className="">
                                    <select className="input-std" onChange={handleSexChange} value={sex} onChange={(e) =>{
                                        const selectedSex = e.target.value;
                                        setSex(selectedSex);
                                    }}>  
                                        <option value="0" >Seleccionar</option>   
                                        <option value="1">Hombre</option>
                                        <option value="2">Mujer</option>
                                    </select>
                                </div>
                            <DatePicker className="input-std" id="dateInput" selected={dDate} onChange={date => setDate(date)}/>
                            <input className="input-std" placeholder="example@example.com" type="emai" value={email} id="emailInput" onChange={handleEmailChange} />
                            <input className="input-std" placeholder="**********" type="password" value={password} id="passwordInput" onChange={handlePasswordChange} />   
                            <input className="input-std" placeholder="**********" type="password" value={verifyPassword} id="verifyPasswordInput" onChange={handleVerifyPasswordChange} />                   
                            <div className="flex pl-16">
                                <a className="p-3 text-white rounded-sm focus:outline-none transition ease-in-out duration-300 bg-blue-500 hover:bg-blue-700 cursor-pointer" onClick={handleEventSignUp}>Registrarse</a>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )

}