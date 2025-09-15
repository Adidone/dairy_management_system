import "../Admin/AdminDashboard.css"
import emp from "../../assets/images/emp.jpg"
import { useState } from "react"
import HomeCollection from "./Menu/HomeCollections"
import { useNavigate } from "react-router-dom"
import AddFarmer from "../../components/Menu/AddFarmer"


const EmpDashBoard = () => {

    const [home, setHome] = useState(true);
    const [farmer,setFarmer] = useState(false);
    const navigate = useNavigate();
    

    return (
        <>
            <div className="dashboard-main">
                <div className="gap"></div>
                <div className="dashboard-header">
                    <div className="header-left">
                        <img src={emp} alt="" className="header-logo" />
                        <div className="header-details">
                            <h4>{localStorage.getItem("empName")}</h4>
                            <p style={{ marginTop: "-10px" }}>{localStorage.getItem("email")}</p>
                        </div>
                        <div className="header-right">
                            <button className="b10 settings">SETTINGS</button>
                            <button className="logout b10"
                                onClick={() => {
                                    localStorage.removeItem("jwtToken");
                                    localStorage.removeItem("empAddress");
                                    localStorage.removeItem("empName")
                                    localStorage.removeItem("email");
                                    localStorage.removeItem("empEmpID");
                                    alert("You have been logged out successfully.");
                                    navigate("/", { replace: true });
                                }}
                            >LOGOUT</button>
                        </div>
                    </div>
                </div>
                <div className="dashboard-content">
                    <div className="gap-content"></div>
                    <div className="dashboard-left">
                        <div className="buttons">
                            <button className="btn1 b" onClick={() => {
                                setHome(true);
                                setFarmer(false)
                            }}>HOME</button>
                            <button className="btn2 b" onClick={() => {
                                setFarmer(true)
                                setHome(false)
                            }}>ADD FARMER</button>
                            <button className="btn6 b" onClick={() => {

                            }}>VIEW COMPLAINTS</button>
                        </div>
                    </div>
                    <div className="dashboard-right">
                        {home && <HomeCollection />}
                        {farmer && <AddFarmer/>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmpDashBoard;