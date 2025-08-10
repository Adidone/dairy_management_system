import { useEffect } from "react";
import { useState } from "react";

const ManageFarmer = () => {

    const[farmers,setFarmers] = useState([]);

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

    return (
        <div>
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
                            <td>{farmer.name}</td>
                            <td>{farmer.email}</td>
                            <td>{farmer.phone_no}</td>
                            <td>{farmer.address}</td>
                            <td><button>DELETE</button></td>
                            <td><button>EDIT</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ManageFarmer;