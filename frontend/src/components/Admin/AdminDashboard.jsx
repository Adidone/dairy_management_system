import React, { useState } from "react";
import "./AdminDashboard.css";
import logo from "../../assets/images/login.png";
import { useNavigate } from "react-router-dom";
import DashBaord from "../Menu/DashBoard";
import RegisterCattle from "../Menu/RegisterCattle";
import AddEmployee from "../Menu/AddEmployee";
import ManageFarmer from "../Menu/ManageFarmer";
import ViewComplaints from "../Menu/ViewComplaints";
import ManageEmploye from "../Menu/ManageEmploye";
import { FaBell } from "react-icons/fa";
import { FaSignOutAlt, FaEnvelope } from "react-icons/fa";
import { FiMail, FiMessageCircle } from "react-icons/fi";
import MilkVerify from "./MilkVerify";

function AdminDashboard() {
    const [cattle, setCattle] = useState(false);
    const [home, setHome] = useState(true);
    const [emp, setEmp] = useState(false);
    const [manageF, setManageF] = useState(false);
    const [manageE, setManageE] = useState(false);
    const [complaints, setComplaints] = useState(false);
    const [verify, setVerify] = useState(false);
    const [btn, setBtn] = useState("rgb(98, 98, 230)")



    const navigate = useNavigate();
    return (
        <>
            <div className="dashboard-main">
                <div className="gap"></div>
                <div className="dashboard-header">
                    <div className="header-left">
                        <img src={logo} alt="" className="header-logo" />
                        <div className="header-details">
                            <h4>{localStorage.getItem("email")}</h4>
                            <p style={{ marginTop: "-10px" }}>ADMIN</p>
                        </div>
                        <div className="header-right">
                            <button className="p-2 rounded-full hover:bg-gray-200 relative" style={{ backgroundColor: "transparent", border: "none", cursor: "pointer",marginLeft:"120px" }} onClick={() => {
                                setHome(false);
                                setCattle(false);
                                setEmp(false);
                                setManageF(false);
                                setManageE(false);
                                setComplaints(false);
                                setVerify(true)
                            }}>
                                <FaBell size={24} color="red" style={{border:"none"}}/>
                                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                                    3
                                </span>
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-200 relative" style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }} onClick={() => {
                                localStorage.removeItem("jwtToken");
                                localStorage.removeItem("email");
                                setTimeout(() => {
                                    navigate("/login", { replace: true });
                                }, 1000);
                                alert("You have been logged out successfully.");
                            }}>
                                <FaSignOutAlt size={24} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="dashboard-content">
                    <div className="gap-content"></div>
                    <div className="dashboard-left">
                        <div className="buttons">
                            <button className="btn1 b" onClick={() => {
                                setHome(true);
                                setCattle(false);
                                setEmp(false);
                                setManageF(false);
                                setManageE(false);
                                setComplaints(false);
                                setVerify(false)

                            }}>HOME</button>
                            <button className="btn2 b" onClick={() => {
                                setHome(false);
                                setCattle(true);
                                setEmp(false);
                                setManageF(false);
                                setManageE(false);
                                setComplaints(false);
                                setVerify(false)
                            }}>REGISTER CATTLE</button>
                            <button className="btn3 b" onClick={() => {
                                setHome(false);
                                setCattle(false);
                                setEmp(true);
                                setManageF(false);
                                setManageE(false);
                                setComplaints(false);
                                setVerify(false)
                            }}>ADD EMPLOYE</button>
                            <button className="btn8 b" onClick={() => {
                                setHome(false);
                                setCattle(false);
                                setEmp(false);
                                setManageF(true);
                                setManageE(false);
                                setComplaints(false);
                                setVerify(false)
                            }}>MANAGE FARMER</button>
                            <button className="btn9 b" onClick={() => {
                                setHome(false);
                                setCattle(false);
                                setEmp(false);
                                setManageF(false);
                                setManageE(true);
                                setComplaints(false);
                                setVerify(false)
                            }}>MANAGE EMPLOYE</button>
                            <button className="btn6 b" onClick={() => {
                                setHome(false);
                                setCattle(false);
                                setEmp(false);
                                setManageF(false);
                                setManageE(false);
                                setComplaints(true);
                                setVerify(false)
                            }}>COMPLAINTS</button>
                        </div>
                    </div>
                    <div className="dashboard-right">
                        {home && <DashBaord />}
                        {cattle && <RegisterCattle />}
                        {emp && <AddEmployee />}
                        {manageF && <ManageFarmer />}
                        {manageE && <ManageEmploye />}
                        {complaints && <ViewComplaints />}
                        {verify && <MilkVerify />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
