import Navbar from "../../components/Navbar"
import { Slider } from "../../components/Slider"
import { Cardwideo } from "../../components/Cardwideo"
import { FooterContainer } from "../../components/Footer/components/footerContent"
import Cookies from "universal-cookie"
import { useEffect } from "react"

export default function Home() {

const cookies = new Cookies();
  
useEffect(()=>{
    charge()
},[])

const charge =()=>{
    if(cookies.get('token')){        
        window.location.href="../../wideo"
        /*cookies.remove('token', {path: "/"})*/
    }
}
    return(
        <div>
            <div>
                <Navbar />  
            </div>
            <Slider />
            <Cardwideo />
            <FooterContainer />
        </div>    
    )
}