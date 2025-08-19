import "./LoginHere.css"
import kit  from "../assets/images/kit.jpg"
import logo from "../assets/images/logo.png";
import admin1 from "../assets/images/admin.jpg"
import emp from "../assets/images/emp.jpg"
import LoginScreen from "./Admin/LoginScreen"
import { useState } from "react";
import EmpLogin from "./EmpLogin";
const LoginHere = () =>{

    const[aColor,setAcolor] = useState("green")
    const[eColor,setEcolor] = useState("white");
    const[a,setA] = useState(true);
    const[e,setE] = useState(false);

    const handleAdmin = () =>{
        setAcolor("green");
        setEcolor("white");
        setA(true)
        setE(false);
    }

    const handleEmp = () =>{
        setEcolor("green");
        setAcolor("white")
        setA(false)
        setE(true);
    }

    const[admin,setAdmin] = useState(true);

    return(
        <div className="login-here">
            <div className="login-left">
                <img src={logo} className="logo" alt="" />
                <div className="select">
                    <button className="select-button" onClick={handleAdmin} style={{backgroundColor:`${aColor}`}}><img src={admin1} alt="" className="select-image"/></button>
                    <button className="select-button" onClick={handleEmp} style={{backgroundColor:`${eColor}`}}><img src={emp} alt="" className="select-image" /></button>
                </div>
                {a && <LoginScreen/>}
                {e && <EmpLogin/>}
            </div>
            <div className="login-right">
                <img src={kit} className="bg" alt="" />
            </div>
        </div>
    )
}

export default LoginHere;