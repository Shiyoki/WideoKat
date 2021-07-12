import WideoNavbar from "../../components/WideoNavbar"
import Sidebar from "../../components/Sidebar"
import SearchComp from "../../components/SearchComp"
import { useState } from "react";

export default function SearchView(){


    return(
         <div>
            <WideoNavbar />
            <section className="p-3">
              <div className="grid grid-cols-12 gap-3">
                <Sidebar />
                <SearchComp />
              </div>
            </section>   
        </div>    
      
    )
}