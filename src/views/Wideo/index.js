import WideoNavbar from "../../components/WideoNavbar"
import Sidebar from "../../components/Sidebar";
import Cookies from "universal-cookie"
import axios from "axios";
import Allvideos from "../../components/Allvideos";
import { useEffect } from "react";

export default function Wideo() {
const cookies = new Cookies();
const token = cookies.get('token')
const url2 = "http://192.168.1.5:5000/user"

useEffect(()=>{
  getData()
  charge()
},[])

const charge =()=>{
  if(!cookies.get('token')){
      window.location.href="../"
   }
}

const getData = async() =>{
  await axios.get(url2, {
    headers: {
      'Authorization': `Bearer ${cookies.get('token')}` 
    }  
  })
    .then(response=>{
     cookies.set('username', response.data.username, {path: "/"}) 
     cookies.set('user', response.data, {path: "/"})   
    })
}

    return(
        <div>
            <WideoNavbar />
            <section className="p-3">
              <div className="grid grid-cols-12 gap-3">
                <Sidebar />
                <Allvideos />
              </div>
            </section>   
        </div>    
    )
}