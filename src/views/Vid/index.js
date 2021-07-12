import VideoComp from "../../components/VideoComp"
import WideoNavbar from "../../components/WideoNavbar"
import VideosVert from "../../components/VideosVert"
import Test from "../../components/VideoComp/Test"

export default function Vid(){

    return( 
        <div>
        <WideoNavbar />
        <section className="p-3">
          <div className="grid grid-cols-12 gap-3">     
            <VideoComp />
            <VideosVert />
          </div>
        </section>   
    </div>      
        
    )
  }