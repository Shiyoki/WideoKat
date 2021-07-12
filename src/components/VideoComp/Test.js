import axios from "axios";
import Cookies from "universal-cookie";
import Icons from "../icons";

export default function Test(){

    const cookies = new Cookies();
    const token = cookies.get('token')
    const likeurl = `http://192.168.1.5:5000/video/4/like`

    const handlePawEvent = async() =>{
        await axios.put(likeurl, {
            headers: {
              'Authorization': `Bearer ${token}` 
            }})    
        .then(response=>{
            console.log(response.data) 
            alert('a') 
         }
     )
     .catch(error=>{
        alert('a')
        console.log(error.data)
    })  

}
    return(
        <>
        <a onClick={handlePawEvent} className="text-purple-300 font-medium text-lg p-3 rounded-sm hover:bg-pink-600 hover:text-purple-50 transition ease-in-out duration-300 cursor-pointer"><Icons className="fas fa-paw" />Paw Gift</a>
        </>
    )
}