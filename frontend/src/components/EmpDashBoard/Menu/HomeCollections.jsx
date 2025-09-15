import { useState, useEffect } from "react";

const HomeCollection = () => {

    const [farmers, setFarmers] = useState([]);
    const [fat, setFat] = useState("");
    const [snf, setSnf] = useState("");
    const [quantity, setQuantity] = useState("");
    const [today, setToday] = useState("");
    const [type, setType] = useState("")
    const empAddress = localStorage.getItem("empAddress");
    

    const handleCollect = async (farmer) =>{
        try{
            const res = await fetch("http://localhost:5555/milk/collectmilk",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    custID:farmer.custID,
                    type,
                    quantity,
                    fat,
                    snf,
                    date:today,
                    empID:localStorage.getItem("empEmpID"),
                    status:"ongoing",
                    collected:true
                }),
            })
            const result = await res.json();
            const{sucess,message} = result;
            // console.log(message
            alert(message)
            
            
        }
        catch(err){
            console.log(err);
            alert(err)
        }
    }

    useEffect(() => {
        const getFarmers = async () => {
            try {
                const res = await fetch("http://localhost:5555/user/show");
                const result = await res.json();
                // if (result) {
                //     console.log(result);
                // }
                const { sucess, data } = result;

                if (sucess) {
                    const newFarmers = data.filter(farmer => farmer.address === empAddress);

                    setFarmers(newFarmers);
                    setToday(new Date().toLocaleDateString("en-CA"));
                    // console.log(new Date().toLocaleDateString("en-CA"))

                }
                else {
                    console.log("error in fetching Farmers");
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        getFarmers();
    }, []);

    


    return (
        <div>
            {farmers.map((farmer, index) => (
                <div className="complaint-box" key={index} style={{height:"80px"}}>
                    <div className="complaint">
                        <p>{farmer.custID}</p>
                        <input type="text"  name="type" id="" placeholder="type" style={{ width: "40px" }} onChange={(e)=>setType(e.target.value)}/>
                        <input type="number"  name="fat" id="" placeholder="fat" style={{ width: "40px" }} onChange={(e)=>setFat(e.target.value)}/>
                        <input type="number"  name="snf" id="" placeholder="snf" style={{ width: "40px" }} onChange={(e)=>setSnf(e.target.value)}/>
                        <input type="number"  name="quantity" id="" placeholder="quantity" style={{ width: "40px" }} onChange={(e)=>setQuantity(e.target.value)}/>
                        <p>{today}</p>
                        <button onClick={()=>handleCollect(farmer)}>COLLECT</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HomeCollection;