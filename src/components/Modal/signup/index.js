import { useState } from "react";
import "./styles.css"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import axios from "axios"

export function Signup(){
    const[username, setUserName]= useState("")
    const[name, setName] = useState("");
    const[lastName, setLastName] = useState("");
    const[sex, setSex ]= useState("")
    const[email, setEmail] = useState("");
    const[dDate, setDate] = useState(new Date())
    const[password, setPassword] = useState("");

    const handelUsernameChange = ({ target: {value} }) => setUserName(value);
    const handleNameChange = ({ target: {value} }) => setName(value);
    const handleLastNameChange = ({ target: {value} }) => setLastName(value);
    const handleSexChange = ({ target: {value} }) => setSex(value);
    const handleEmailChange = ({ target: {value} }) => setEmail(value);
    const handlePasswordChange = ({ target: {value} }) => setPassword(value);
  
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
    
    const url ="http://192.168.1.7:5000/user"

    const handleEventSignUp = async () =>{
        await axios.post(url, user)
        .then(response=>{
            return response.data
        })
        .catch(error=>{
            console.log(error)
        })  
     }
    //////////////////////////////////////////////////////MODAL////////////////////////////////////////////////////////
    return(
        <div >
            <form onSubmit={handleEventSignUp}>
                <fieldset>
                    <legend className="fs-2 text-light text-center">Registrarse</legend>
                    <div className="custom-scrollable text-center">
                        <label className="mt-3 text-light" for="userInput">Usuario</label>
                        <input className="mx-auto d-block form-control custom-control bg-secondary text-light" type="text" value={username} id="userInput" onChange={handelUsernameChange} />
                        <label className="text-light" for="nameInput">Nombre</label>
                        <input className="mx-auto d-block form-control custom-control bg-secondary text-light" type="text" value={name} id="nameInput" onChange={handleNameChange} />
                        <label className="mt-3 text-light" for="lastNameInput">Apellido</label>
                        <input className="mx-auto d-block form-control custom-control bg-secondary text-light" type="text" value={lastName} id="lastNameInput" onChange={handleLastNameChange} />
                        <div className="mt-3 ">
                            <label className="text-light">Sexo</label>
                                <select className="mx-auto d-block mt-1 text-light bg-secondary custom-control form-select" onChange={handleSexChange} value={sex} onChange={(e) =>{
                                    const selectedSex = e.target.value;
                                    setSex(selectedSex);
                                }}>  
                                    <option value="0" >Seleccionar</option>   
                                    <option value="1">Hombre</option>
                                    <option value="2">Mujer</option>
                                </select>
                            </div>
                            <label className="mt-3 text-light" for="dateInput">Fecha de nacimiento</label>
                        <DatePicker className="form-select custom-control bg-secondary text-light mx-auto d-block" id="dateInput" selected={dDate} onChange={date => setDate(date)}/>
                        <label className="mt-3 text-light" for="emailInput">Correo electronico</label>
                        <input className="mx-auto d-block form-control custom-control bg-secondary text-light" type="emai" value={email} id="emailInput" onChange={handleEmailChange} />
                        <label className="mt-3 text-light" for="passwordInput">Contrasena</label>
                        <input className="mx-auto d-block form-control custom-control bg-secondary text-light" type="password" value={password} id="passwordInput" onChange={handlePasswordChange} />                      
                    </div>
                    <button className="d-block mx-auto mt-3 button" type="submit">Registrarse</button>
                </fieldset>
            </form>
        </div>
    )

}
