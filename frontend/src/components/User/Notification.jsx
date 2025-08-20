import { useEffect } from "react";
import { useState } from "react";

const Notification = () => {

    const [otp, setOtp] = useState([]);
    const [reply, setReply] = useState("");



    useEffect(() => {
        const getOtp = async () => {
            try {
                const res = await fetch("http://localhost:5555/user/showotp", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        custID:localStorage.getItem("custID")
                    }),
                });
                const result = await res.json();
                if (result) {
                    console.log(result);
                }

                const { sucess, data } = result;
                if (sucess) {
                    setOtp(data);
                }
                else {
                    console.log("error in fetching Farmers");
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        getOtp();
    }, []);

    return (
        <div>

            <div className="complaint-box" style={{marginLeft:"250px"}}>
                {otp.map((o, index) => (
                    <div key={index} className="complaint" >
                        <h3 style={{color:"black"}}>{o.custID}</h3>
                        <h3 style={{color:"black"}}>TYPE : {o.type}</h3>
                        <h3 style={{color:"black"}}>BILL : {o.bill}</h3>
                        <p>{o.date}</p>
                        <h3 style={{color:"black"}}>OTP : {o.otp}</h3>
                        <input type="text" style={{width:"50px"}}/>
                        <button>SUBMIT</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notification;