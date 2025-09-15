
import { useEffect } from "react";
import { useState } from "react";

const MilkVerify = () => {

    const [verify, setVerify] = useState([]);

    const handleVerify = async (v) => {
        try {
            const res = await fetch("http://localhost:5555/admin/checkotp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    custID:v.custID,type:v.type,otp:v.otp,bill:v.bill,date:v.date
                }),
            });
            const result = await res.json();
            const{sucess,message} = result;
            // console.log(result)
            alert(sucess)
        }
        
        catch (err) {
            console.log(err)
            alert(err)
        }
    }

    useEffect(() => {

        const getOtp = async () => {
            try {
                const res = await fetch("http://localhost:5555/admin/showallotp")
                const result = await res.json();
                if (result) {
                    // console.log(result);
                }

                const { sucess, data } = result;


                if (sucess) {
                    setVerify(data);
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        getOtp();
    }, []);



    return (
        <div >
            <div className="complaint-box" style={{ marginLeft: "160px", width: "900px" }}>
                {verify.map((v, index) => (
                    <div key={index} className="complaint" >
                        <h3 style={{ color: "blue" }}>{v.date.split("T")[0]}</h3>
                        <h3 style={{ color: "black", width: "180px", backgroundColor: "white" }}>TYPE : {v.type}</h3>
                        <h3 style={{ color: "black", width: "180px", backgroundColor: "white" }}>BILL : {v.bill}</h3>
                        <h3 style={{ color: "black", width: "180px", backgroundColor: "white" }}>OTP : {v.otp}</h3>
                        <button onClick={() => handleVerify(v)}>VERIFY</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MilkVerify;