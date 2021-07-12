import EditvitComp from "../../components/EditvitComp";
import WideoNavbar from "../../components/WideoNavbar";
import Sidebar from "../../components/Sidebar";


export default function Editvideo(){
    return(
        <div>
        <WideoNavbar />
        <section className="p-3">
          <div className="grid grid-cols-12 gap-3">
            <Sidebar />
            <EditvitComp />
          </div>
        </section>   
    </div>    
    )
}