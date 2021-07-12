import ReportSelf from "../../components/ReportSelf"
import Sidebar from "../../components/Sidebar"
import WideoNavbar from "../../components/WideoNavbar"
export default function Stats(){
    return(
    <div>
        <WideoNavbar />
        <section className="p-3">
            <div className="grid grid-cols-12 gap-3">
            <Sidebar />
            <div className="col-span-10">
        <ReportSelf />
        </div>
        </div>       
        </section>   
    </div>
    )
}