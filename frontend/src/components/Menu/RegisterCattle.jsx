
// import React from 'react';
import './AddFarmer.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterCattle = () => {

    const [cattleID, setCattleID] = useState("");
    const [birth, setBirth] = useState("");
    const [type, setType] = useState("");
    const [breed, setBreed] = useState("");



    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'cattleID':
                setCattleID(value);
                break;
            case 'birth':
                setBirth(value);
                break;
            case 'type':
                setType(value);
                break;
            case 'breed':
                setBreed(value);
                break;
            default:
                break;
        }
        console.log(`Field ${name} changed to: ${value}`);
    }

    const handleClick = async (e) => {
        e.preventDefault();
        if (!cattleID || !birth || !type || !breed) {
            console.log("all fields necessary");
            alert("all fields are necessary");
        }
        try{
            const url = "http://localhost:5555/cattle/register"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cattleID,
                    birth,
                    type,
                    breed
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
                console.log("error false");
                alert("error");
            }
            
        }
        catch (err) {
            console.log(err.message);
            // alert(err);
        }
    }


    return (
        <div className='formbox'>
            <div className='form'>
                <div className="label3">
                    <label htmlFor="cattleID">Cattle ID :</label>
                    <input type="text" name='cattleID' placeholder='Enter Cattle ID' className='input3' onChange={handleChange} value={cattleID} />
                </div>
                <div className="label3">
                    <label htmlFor="birth">Birth :</label>
                    <input type="date" name='birth' placeholder='Enter Birth date' className='input3' onChange={handleChange} value={birth} />
                </div>
                <div className="label3">
                    <label htmlFor="type">Type :</label>
                    <input type="text" name='type' placeholder='Enter Type Of Cattle' className='input3' onChange={handleChange} value={type} />
                </div>
                <div className="label3">
                    <label htmlFor="breed">Breed :</label>
                    <input type="text" name='breed' placeholder='Enter Breed' className='input3' onChange={handleChange} value={breed} />
                </div>
                <button className='btn5' type='submit' onClick={handleClick}>REGISTER CATTLE</button>
            </div>
        </div>
    )
}

export default RegisterCattle;