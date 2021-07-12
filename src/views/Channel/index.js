import Cookies from "universal-cookie";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ChanelInfo from "../../components/ChanelInfo";
import WideoNavbar from "../../components/WideoNavbar";

export default function Channel(){

const cookies = new Cookies();
 window.addEventListener('load', ()=>{
 if(cookies.get('token')){
   
    }
  }
)
return(
    <div>
        <WideoNavbar />
        <section className="p-3">
          <div className="grid grid-cols-12 gap-3">
            <Sidebar />
            <ChanelInfo />
          </div>
        </section>
        
    </div>
)
}