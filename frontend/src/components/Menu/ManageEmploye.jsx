import { useEffect } from "react";
import { useState } from "react";

const ManageEmploye = () => {

    const [emps, setEmps] = useState([]);

    const[edit,setEdit] = useState(null);
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phone_no,setPhoneNo] = useState("");
    const[address,setAddress] = useState(""); 

    const handleEdit = async (emp) =>{
        setEdit(emp.empID);
        setName(emp.name);
        setEmail(emp.email);
        setPhoneNo(emp.phone_no);
        setAddress(emp.address);
    }

    useEffect(() => {

        const getEmploye = async () => {
            try {
                const res = await fetch("http://localhost:5555/emp/show");
                const result = await res.json();
                if (result) {
                    console.log(result);
                }

                const { sucess, data } = result;
                if (sucess) {
                    setEmps(data);
                }
                else {
                    console.log("error in fetching Farmers");
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        getEmploye();
    }, []);

    const handleSave = async (empID) => {
        
        try {
            const url = "http://localhost:5555/edit/emp";
            const res = await fetch(url,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    empID,
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
                getEmploye();  
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
                        <th>EMPLOYE ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE NO</th>
                        <th>ADDRESS</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map((emp, index) => (
                        <tr key={index}>
                            <td>{emp.empID}</td>
                            <td>{
                                edit === emp.empID ? (
                                    <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)}/>
                                ) : (
                                    emp.name
                                )
                            }</td>
                            <td>{
                                edit === emp.empID ? (
                                    <input type="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)}/>
                                ) : (
                                    emp.email
                                )
                            }</td>
                            <td>{
                                edit === emp.empID ? (
                                    <input type="number" value={phone_no} name="phone_no" onChange={(e)=>setPhoneNo(e.target.value)}/>
                                ) : (
                                    emp.phone_no
                                )
                            }</td>
                            <td>{
                                edit === emp.empID ? (
                                    <input type="text" value={address} name="address" onChange={(e)=>setAddress(e.target.value)}/>
                                ) : (
                                    emp.address
                                )
                            }</td>
                            <td>
                                {
                                    edit === emp.empID ? (
                                        <button onClick={()=>handleSave(emp.empID)} style={{color:"white",backgroundColor:"blue",borderRadius:"7px"}}>SAVE</button>
                                    ):(
                                        <button onClick={()=>handleEdit(emp)} style={{borderRadius:"7px"}}>EDIT</button>
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

export default ManageEmploye;