import React, { useState } from "react";
import "./AdminDashboard.css";
import  logo from "../../assets/images/login.png";
import { useNavigate } from "react-router-dom";
import DashBaord from "../Menu/DashBoard";
import RegisterCattle from "../Menu/RegisterCattle";
import AddEmployee from "../Menu/AddEmployee";
import ManageFarmer from "../Menu/ManageFarmer";
import ManageEmployee from "../Menu/ManageEmploye";
import ViewComplaints from "../Menu/ViewComplaints";
import ManageEmploye from "../Menu/ManageEmploye";

function AdminDashboard() {
    const[cattle,setCattle] = useState(false);
    const[home,setHome] = useState(true);
    const[emp,setEmp] = useState(false);
    const[manageF,setManageF] = useState(false);
    const[manageE,setManageE] = useState(false);
    const[complaints,setComplaints] = useState(false);
    
    const navigate = useNavigate();
    return (
        <>
            <div className="dashboard-main">
                <div className="gap"></div>
                <div className="dashboard-header">
                    <div className="header-left">
                        <img src={logo} alt="" className="header-logo"/>
                        <div className="header-details">
                            <h4>admin@gmail.com</h4>
                            <p style={{marginTop:"-10px"}}>ADMIN</p>
                        </div>
                        <div className="header-right">
                            <button className="b10 settings">SETTINGS</button>
                            <button className="logout b10"
                                onClick={()=>{
                                    localStorage.removeItem("jwtToken");
                                    setTimeout(() => {
                                       navigate("/", { replace: true });
                                    }, 1000);
                                    alert("You have been logged out successfully.");
                                }}
                            >LOGOUT</button>
                        </div>
                    </div>
                </div>
                <div className="dashboard-content">
                    <div className="gap-content"></div>
                    <div className="dashboard-left">
                        <div className="buttons">
                            <button className="btn1 b" onClick={()=>{
                                setHome(true);
                                setCattle(false);
                                setEmp(false);
                                setManageF(false);
                                setManageE(false);
                                setComplaints(false);
                            }}>HOME</button>
                            <button className="btn2 b" onClick={()=>{
                                setHome(false);
                                setCattle(true);
                                setEmp(false);
                                setManageF(false);
                                setManageE(false);
                                setComplaints(false);
                            }}>REGISTER CATTLE</button>
                            <button className="btn3 b" onClick={()=>{
                                setHome(false);
                                setCattle(false);
                                setEmp(true);
                                setManageF(false);
                                setManageE(false);
                                setComplaints(false);
                            }}>ADD EMPLOYE</button>
                            <button className="btn8 b" onClick={()=>{
                                setHome(false);
                                setCattle(false);
                                setEmp(false);
                                setManageF(true);
                                setManageE(false);
                                setComplaints(false);
                            }}>MANAGE FARMER</button>
                            <button className="btn9 b" onClick={()=>{
                                setHome(false);
                                setCattle(false);
                                setEmp(false);
                                setManageF(false);
                                setManageE(true);
                                setComplaints(false);
                            }}>MANAGE EMPLOYE</button>
                            <button className="btn6 b" onClick={()=>{
                                setHome(false);
                                setCattle(false);
                                setEmp(false);
                                setManageF(false);
                                setManageE(false);
                                setComplaints(true);
                            }}>VIEW COMPLAINTS</button>
                        </div>
                    </div>
                    <div className="dashboard-right">
                        {home && <DashBaord/>}
                        {cattle && <RegisterCattle/>}
                        {emp && <AddEmployee/>}
                        {manageF && <ManageFarmer/>}
                        {manageE && <ManageEmploye/>}
                        {complaints && <ViewComplaints/>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
