

import "../Admin/AdminDashboard.css"
import emp from "../../assets/images/emp.jpg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ShowCollection from "./ShowCollection"
import { FaBell } from "react-icons/fa";
import { FaSignOutAlt,FaEnvelope } from "react-icons/fa"; 
import { FiMail, FiMessageCircle } from "react-icons/fi";
import AddMsg from "./AddMsg"
import Notification from "./Notification"


const UserDashBoard = () => {
    const navigate = useNavigate();
    const[home,setHome] = useState(true);
    const[msg,setMsg] = useState(false);
    const[notf,setNotf] = useState(false)
    localStorage.setItem("custID", "F01");


    return (
        <>
            <div className="dashboard-main">
                <div className="gap"></div>
                <div className="dashboard-header">
                    <div className="header-left">
                        <img src={emp} alt="" className="header-logo" />
                        <div className="header-details">
                            <h4>username</h4>
                            <p style={{ marginTop: "-10px" }}>ID</p>
                        </div>
                        <div className="header-right">
                            <button className="p-2 rounded-full hover:bg-gray-200 relative" style={{backgroundColor:"transparent",border:"none",cursor:"pointer"}} onClick={()=>{
                                setHome(false);
                                setMsg(false);
                                setNotf(true)
                            }}>
                                <FaBell size={24} />
                                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                                    3
                                </span>
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-200 relative" style={{backgroundColor:"transparent",border:"none",cursor:"pointer"}} onClick={()=>{
                                setHome(false);
                                setMsg(true);
                                setNotf(false)
                            }}>
                                <FiMessageCircle size={24}/>
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-200 relative" style={{backgroundColor:"transparent",border:"none",cursor:"pointer"}}>
                                <FaSignOutAlt size={24}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="dashboard-content">
                    <div className="gap-content"></div>
                    {home && <ShowCollection/>}
                    {msg && <AddMsg/>}
                    {notf && <Notification/>}
                </div>
            </div>
        </>
    )
}

export default UserDashBoard;