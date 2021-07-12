import { FooterContainer } from "../../components/Footer/components/footerContent"
import Navbar from "../../components/Navbar"
import { RegisterComp } from "../../components/RegisterComp"

export default function Register(){

    return(  
        <>
        <Navbar />  
        <RegisterComp /> 
        <FooterContainer />   
        </>
    )
}