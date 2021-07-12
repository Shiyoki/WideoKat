import Cookies from "universal-cookie"
import Sidebar from "../../components/Sidebar";
import WideoNavbar from "../../components/WideoNavbar";
import { UploadComp } from "../../components/Upload";

export default function Upload(){
    
const cookies = new Cookies(); 
    window.addEventListener('load', () =>{
        if(!cookies.get('token')){
            window.location.href="../"
         }
    }   
)
    
return(
    <div>
        <WideoNavbar />
        <section className="p-3">
            <div className="grid grid-cols-12 gap-3">
                <Sidebar /> 
                <UploadComp />
            </div>
        </section>
    </div>
    )    
}

