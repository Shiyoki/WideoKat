import { LoginComp } from "../../components/LoginComp";
import Navbar from "../../components/Navbar";
import { FooterContainer } from "../../components/Footer/components/footerContent"


export default function Login(){
    return(
        <>
        <Navbar />
        <LoginComp />
        <FooterContainer />        
        </>
    )
}