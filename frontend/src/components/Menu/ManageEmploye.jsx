import { useEffect } from "react";
import { useState } from "react";

const ManageEmploye = () => {

    const[emps,setEmps] = useState([]);

    useEffect (() => {
        const getEmploye = async () =>{
            try{
                const res = await fetch("http://localhost:5555/emp/show");
                const result = await res.json();
                if(result){
                    console.log(result);
                }

                const { sucess, data } = result;
                if(sucess){
                    setEmps(data);
                }
                else{
                    console.log("error in fetching Farmers");
                }
            }
            catch(err){
                console.log(err);
            }
        }
        getEmploye();
    },[]);

    return (
        <div>
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
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phone_no}</td>
                            <td>{emp.address}</td>
                            <td><button>DELETE</button></td>
                            <td><button>EDIT</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ManageEmploye;