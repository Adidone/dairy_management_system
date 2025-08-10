import { useEffect } from "react";
import { useState } from "react";
import "./ViewComplaints.css"

const ViewComplaints = () => {

    const [complaints, setComplaints] = useState([]);

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
                        <input type="text" />
                        <button>SUBMIT</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewComplaints;