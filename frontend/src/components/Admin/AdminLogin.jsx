import React, { useState } from "react";
import "./AdminLogin.css";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
function AdminLogin() {

  const navigate = useNavigate();

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5555/admin/login", {
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
    const{message, sucess, jwtToken} = data;
    if(sucess){
      localStorage.setItem("jwtToken", jwtToken);
      setTimeout(() => {
        navigate("/admin/dashboard");   
      }, 1000);
      alert(message);
    } else {
      alert(message);
      console.error("Login failed:", message);
    }
    if(!res.ok) {
      throw new Error("Network response was not ok");
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
        <div className="logo">
          <img src={logo} alt="" />
          <p>DAIRY OPTIMIZATION</p>
        </div>

        <div className="label1">
          <label htmlFor="username">username</label>
          <input className="input" type="email" name="username" id="username" onChange={handleChange}/>
        </div>

        <div className="label2">
          <label htmlFor="password">password</label>
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

export default AdminLogin;