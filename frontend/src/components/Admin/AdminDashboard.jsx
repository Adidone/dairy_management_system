import React from "react";
import "./AdminDashboard.css";
import  logo from "../../assets/images/login.png";
import { useNavigate } from "react-router-dom";
function AdminDashboard() {
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
                                navigate("/admin/addfarmer");
                            }}>ADD FARMER</button>
                            <button className="btn2 b" onClick={()=>{
                                navigate("/admin/registercattle");
                            }}>REGISTER CATTLE</button>
                            <button className="btn3 b" onClick={()=>{
                                navigate("/admin/addemploye");
                            }}>ADD EMPLOYE</button>
                            <button className="btn8 b" onClick={()=>{
                                navigate("/admin/managefarmer");
                            }}>MANAGE FARMER</button>
                            <button className="btn9 b" onClick={()=>{
                                navigate("/admin/manageemploye");
                            }}>MANAGE EMPLOYE</button>
                            <button className="btn6 b" onClick={()=>{
                                navigate("/admin/showcomplaints");
                            }}>VIEW COMPLAINTS</button>
                        </div>
                    </div>
                    <div className="dashboard-right">
                        <div className="frow"> 
                            <div className="box1">
                                <p className="box1-title">TOP MILK SELLERS</p>
                                <div className="sellers">
                                    <div className="seller">
                                        <p>C01</p>
                                        <p>Ranjan Mali</p>
                                        <p>200ltr</p>
                                    </div>
                                    <div className="seller">
                                        <p>C02</p>
                                        <p>Vedant Bhat</p>
                                        <p>100ltr</p>
                                    </div>
                                    <div className="seller">
                                        <p>C10</p>
                                        <p>Aditya Done</p>
                                        <p>50ltr</p>
                                    </div>
                                    <div className="seller">
                                        <p>C10</p>
                                        <p>Aditya Done</p>
                                        <p>50ltr</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box2">
                                <p className="box1-title">TOP EMPLOYEE</p>
                                <div className="sellers">
                                    <div className="seller">
                                        <p>C01</p>
                                        <p>Ranjan Mali</p>
                                        <p>200L</p>
                                    </div>
                                    <div className="seller">
                                        <p>C02</p>
                                        <p>Vedant Bhat</p>
                                        <p>100L</p>
                                    </div>
                                    <div className="seller">
                                        <p>C10</p>
                                        <p>Aditya Done</p>
                                        <p>50L</p>
                                    </div>
                                    <div className="seller">
                                        <p>C10</p>
                                        <p>Aditya Done</p>
                                        <p>50L</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="srow">
                            <div className="small1">
                                <p className="box1-title">LAST 3 DAYS SELL</p>
                                <div className="days">
                                    <div className="day">
                                        <p>1-1-2000</p>
                                        <p>200L</p>
                                    </div>
                                    <div className="day">
                                        <p>1-1-2000</p>
                                        <p>150L</p>
                                    </div>
                                    <div className="day">
                                        <p>1-1-2000</p>
                                        <p>100L</p>
                                    </div>
                                </div> 
                            </div>
                            <div className="small2">
                                <p className="box1-title">STOCK LEFT TODAY</p>
                                <div className="day">
                                        <p>COW</p>
                                        <p>200L</p>
                                    </div>
                                    <div className="day">
                                        <p>BUFFALO</p>
                                        <p>150L</p>
                                    </div>
                            </div>
                            <div className="small3">
                                <p>TODAYS</p>
                                <p>COLLECTION</p> 
                                <h1>101 L</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
