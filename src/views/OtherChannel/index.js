import Channeluser from "../../components/Channeluser";
import Sidebar from "../../components/Sidebar";
import WideoNavbar from "../../components/WideoNavbar";


export default function OtherChannel(){
    return (
        <>
            <WideoNavbar />
            <section className="p-3">
              <div className="grid grid-cols-12 gap-3">
                <Sidebar />
                <Channeluser />
              </div>
            </section>
        </>
    )
}