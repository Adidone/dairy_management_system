import React, { useState } from "react";
import "./Admin/AdminLogin.css";
import { useNavigate } from "react-router-dom";
function EmpLogin() {

  const navigate = useNavigate();

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const res = await fetch("http://localhost:5555/emp/login", {
      method: "POST",
      headers: {  
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: username,
        password: password
      })
    });
    const data = await res.json();    
    const{message, sucess, jwtToken,empAddress,empName,email,empEmpID} = data;
    console.log(data)
    if(sucess){
      localStorage.setItem("jwtToken", jwtToken);
      localStorage.setItem("empAddress",empAddress);
      localStorage.setItem("empName",empName);
      localStorage.setItem("email",email)
      localStorage.setItem("empEmpID",empEmpID);
      console.log(data)
      setTimeout(() => {
        navigate("/emp/dashboard");   
      }, 1000);
      alert(message);
    } else {
      alert(message);
      console.error("Login failed:", message);
    }
    console.log("Login response:", data);
    setUsername("");  
    setPassword("");  
    
  }  

  const handleChange = (e) =>{
    const{name,value} = e.target;
    if(name === "username"){
      setUsername(value);
    } else if(name === "password"){
      setPassword(value);
    } 
  }

  return (
    <>
      <div className="main">
        <div className="label1">
          {/* <label htmlFor="username">username</label> */}
          <input className="input" type="email" name="username" id="username" onChange={handleChange}/>
        </div>

        <div className="label2">
          {/* <label htmlFor="password">password</label> */}
          <input className="input" type="password" name="password" id="password" onChange={handleChange}/>
        </div>

        <div className="btn">
          <button type="submit" onClick={handleSubmit} className="btn4">
            LOGIN
          </button>
        </div>

      </div>
    </>
  );
}

export default EmpLogin;