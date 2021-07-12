import ReportUser from "../../components/ReportUser";
import ReportVideos from "../../components/ReportVideos";
import WideoNavbar from "../../components/WideoNavbar";
import Sidebar from "../../components/Sidebar";

export default function Report(){
    return(

        <div>
        <WideoNavbar />
        <section className="p-3">
          <div className="grid grid-cols-12 gap-3">
            <Sidebar />
            <div className="col-span-10">
              <ReportVideos />
              <ReportUser />
            </div>
          </div>       
        </section>   
          
         
    </div>    


     
   
    
    
 
    )

} 