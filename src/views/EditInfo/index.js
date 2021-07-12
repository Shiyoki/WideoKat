import WideoNavbar from "../../components/WideoNavbar"
import Cookies from "universal-cookie"
import { Edit } from "../../components/Edit";
import Sidebar from "../../components/Sidebar";

export default function EditInfo(){

    const cookies = new Cookies();
    window.addEventListener('load', ()=>{
    if(cookies.get('token')){
        window.location.href="../../wideo"
    }
  }
)
    return(
        <div>           
            <WideoNavbar />
            <section className="p-3">
                <div className="grid grid-cols-12 gap-3">
                    <Sidebar />
                    <Edit />
                </div>
            </section>
        </div>
    )
}