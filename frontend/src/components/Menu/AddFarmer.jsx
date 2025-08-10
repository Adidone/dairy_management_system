// import React from 'react';
import './AddFarmer.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddFarmer = () => {

    const [custID, setcustID] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone_no, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");



    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'custID':
                setcustID(value);
                break;
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'phone_no':
                setPhoneNo(value);
                break;
            case 'address':
                setAddress(value);
                break;
            default:
                break;
        }
        console.log(`Field ${name} changed to: ${value}`);
    }

    const handleClick = async (e) => {
        e.preventDefault();
        if (!custID || !name || !email || !password || !phone_no || !address) {
            console.log("all fields necessary");
            alert("all fields are necessary");
        }
        try{
            const url = "http://localhost:5555/user/create"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    custID,
                    name,
                    email,
                    password,
                    phone_no,
                    address
                }),
            });

            const result = await response.json();
            if (result) {
                console.log(result);
            }
            const { message, success } = result;
            if (success) {      
                console.log(message);
                    alert(message);
                setTimeout(() => {
                        // navigate("empLogin");
                }, 1000);
                }   
            else {
                console.log(message);
                alert(message);
            }
            
        }
        catch (err) {
            console.log(err);
            alert(err.message);
        }
    }


    return (
        <div className='formbox'>
            <div className='form'>
                <div className="label3">
                    <label htmlFor="custID">Farmer ID :</label>
                    <input type="text" name='custID' placeholder='Enter Farmer ID' className='input3' onChange={handleChange} value={custID} />
                </div>
                <div className="label3">
                    <label htmlFor="name">Name :</label>
                    <input type="text" name='name' placeholder='Enter Name' className='input3' onChange={handleChange} value={name} />
                </div>
                <div className="label3">
                    <label htmlFor="email">Email ID :</label>
                    <input type="email" name='email' placeholder='Enter Farmer Email-ID' className='input3' onChange={handleChange} value={email} />
                </div>
                <div className="label3">
                    <label htmlFor="password">Password :</label>
                    <input type="password" name='password' placeholder='Enter Password' className='input3' onChange={handleChange} value={password} />
                </div>
                <div className="label3">
                    <label htmlFor="phone_no">Phone No :</label>
                    <input type="text" name='phone_no' placeholder='Enter Phone Number' className='input3' onChange={handleChange} value={phone_no} />
                </div>
                <div className="label3">
                    <label htmlFor="address">Address :</label>
                    <input type="text" name='address' placeholder='Enter Address' className='input3' onChange={handleChange} value={address} />
                </div>
                <button className='btn5' type='submit' onClick={handleClick}>ADD FARMER</button>
            </div>
        </div>
    )
}

export default AddFarmer;