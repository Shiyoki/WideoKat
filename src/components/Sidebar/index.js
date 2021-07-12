import { Link } from "react-router-dom"
import { SidebarInfo } from "./info"
import "./styles.css"

export default function Sidebar(){   
    return(
        <aside className="col-span-2">
            <div className="bg-gradient-to-tr from-purple-700 to-purple-600 shadow-md rounded-lg">
                <ul className="flex flex-col gap-4 p-2">
                    {
                        SidebarInfo.map((item, index) =>{
                            return (
                                <Link to={item.path}>
                                    <li className="group hover:bg-indigo-400 transition ease-in-out duration-500 p-3 rounded-md font-bold text-md" key={index}>
                                        <span className="text-purple-50 group-hover:text-gray-200">{item.title}</span>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        </aside>
    )
}