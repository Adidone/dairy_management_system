import { useEffect } from "react";
import { useState } from "react";

const Notification = () => {

    const [otp, setOtp] = useState([]);

    const handleSubmit = async (o) =>{
        try{
            const res = await fetch("http://localhost:5555/user/otpsubmit",{
                method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        custID:o.custID,type:o.type,otp:o.otp,bill:o.bill,date:o.date
                    }),
            })
            const result = await res.json();
            const{sucess,message} = result;
            alert(message)
        }
        catch(err){
            console.log(err)
        }
    }

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
                    // console.log(result);
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
                        <h3 style={{color:"blue"}}>{o.date.split("T")[0]}</h3>
                        <h3 style={{color:"black",width:"180px",backgroundColor:"white"}}>TYPE : {o.type}</h3>
                        <h3 style={{color:"black",width:"180px",backgroundColor:"white"}}>BILL : {o.bill}</h3>
                        <h3 style={{color:"black",width:"180px",backgroundColor:"white"}}>OTP : {o.otp}</h3>
                        <input type="number" style={{width:"50px"}}/>
                        <button onClick={()=>handleSubmit(o)}>SUBMIT</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notification;