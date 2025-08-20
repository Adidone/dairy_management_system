import { useState } from "react";

const AddMsg = () => {

    const [custID, setcustID] = useState("")
    const [msg, setMsg] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'custID':
                setcustID(value);
                break;
            case 'msg':
                setMsg(value);
                break;
            default:
                break;
        }
        console.log(`Field ${name} changed to: ${value}`);
    }
    return (

        <div className="msg-box" style={{display:"flex",justifyContent:"center",marginLeft:"100px",backgroundColor:"antiquewhite"}}>
            <div className="label3">
                <input type="text" name='msg' placeholder='Enter Msg Here' className='input3' onChange={handleChange} value={msg} />
            </div>
        </div>
    )
}

export default AddMsg;