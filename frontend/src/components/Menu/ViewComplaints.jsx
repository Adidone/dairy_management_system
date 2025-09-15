import { useEffect } from "react";
import { useState } from "react";
import "./ViewComplaints.css"

const ViewComplaints = () => {

    const [complaints, setComplaints] = useState([]);
    const[reply,setReply] = useState("");

    const handleReply = async(complaint) =>{
        try{
            console.log(complaint.custID)
            
            const res = await fetch("http://localhost:5555/user/complaint/reply",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    custID:complaint.custID,
                    msg:complaint.msg,
                    reply
                }),

            });
            const result = await res.json();
            const{sucess,message} = result;
            // console.log(message
            alert(message)
            setReply("");
        }
        catch(err){
            alert(err.message)
        }
    }

    useEffect(() => {
        const getComplaints = async () => {
            try {
                const res = await fetch("http://localhost:5555/user/complaint/show");
                const result = await res.json();
                if (result) {
                    console.log(result);
                }

                const { sucess, data } = result;
                if (sucess) {
                    setComplaints(data);
                }
                else {
                    console.log("error in fetching Farmers");
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        getComplaints();
    }, []);

    return (
        <div>
            
            <div className="complaint-box">
                {complaints.map((complaint, index) => (
                    <div key={index} className="complaint">
                        <p>{complaint.custID}</p>
                        <h3>---</h3>
                        <p className="msg">{complaint.msg}</p>
                        <input type="text" onChange={(e)=>setReply(e.target.value)}/>
                        <button onClick={()=>handleReply(complaint)}>REPLY</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewComplaints;