import { useEffect } from "react";
import { useState } from "react";
import "./Table.css";

const ManageFarmer = () => {

    const[farmers,setFarmers] = useState([]);

    const[edit,setEdit] = useState(null);
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phone_no,setPhoneNo] = useState("");
    const[address,setAddress] = useState(""); 
    
    const handleEdit = async (farmer) =>{
        setEdit(farmer.custID);
        setName(farmer.name);
        setEmail(farmer.email);
        setPhoneNo(farmer.phone_no);
        setAddress(farmer.address);
    }

    useEffect (() => {
        const getFarmers = async () =>{
            try{
                const res = await fetch("http://localhost:5555/user/show");
                const result = await res.json();
                if(result){
                    console.log(result);
                }

                const { sucess, data } = result;
                if(sucess){
                    setFarmers(data);
                }
                else{
                    console.log("error in fetching Farmers");
                }
            }
            catch(err){
                console.log(err);
            }
        }
        getFarmers();
    },[]);

    const handleSave = async (custID) => {
        
        try {
            const url = "http://localhost:5555/edit/user";
            const res = await fetch(url,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    custID,
                    name,
                    email,
                    phone_no,
                    address
                })
            })

            const result = await res.json();
            const{sucess,message} = result;
            if(sucess){
                console.log(message);
                setEdit(null);
                getFarmers();  
            }else{
                console.log("eroor=>",message)
            }
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>FARMER ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE NO</th>
                        <th>ADDRESS</th>
                    </tr>
                </thead>
                <tbody>
                    {farmers.map((farmer, index) => (
                        <tr key={index}>
                            <td>{farmer.custID}</td>
                            <td>{
                                edit === farmer.custID ? (
                                    <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)}/>
                                ) : (
                                    farmer.name
                                )
                            }</td>
                            <td>{
                                edit === farmer.custID ? (
                                    <input type="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)}/>
                                ) : (
                                    farmer.email
                                )
                            }</td>
                            <td>{
                                edit === farmer.custID ? (
                                    <input type="number" value={phone_no} name="phone_no" onChange={(e)=>setPhoneNo(e.target.value)}/>
                                ) : (
                                    farmer.phone_no
                                )
                            }</td>
                            <td>{
                                edit === farmer.custID ? (
                                    <input type="text" value={address} name="address" onChange={(e)=>setAddress(e.target.value)}/>
                                ) : (
                                    farmer.address
                                )
                            }</td>
                            <td>
                                {
                                    edit === farmer.custID ? (
                                        <button onClick={()=>handleSave(farmer.custID)} style={{color:"white",backgroundColor:"blue",borderRadius:"7px"}}>SAVE</button>
                                    ):(
                                        <button onClick={()=>handleEdit(farmer)} style={{borderRadius:"7px"}}>EDIT</button>
                                    )
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ManageFarmer;