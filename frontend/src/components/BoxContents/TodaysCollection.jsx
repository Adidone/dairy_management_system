import { useEffect, useState } from "react";
import AdminDashboard from "../Admin/AdminDashboard";


const TodaysCollection = ()=>{
    const[litres,setLitres] = useState(0);   
   
    useEffect(()=>{
        const todaysCollection = async () =>{
            try{
                const res = await fetch("http://localhost:5555/milk/todayscollection");
                const result = await res.json();
                // console.log(result);
                const {success, data} = result;
                if(success){
                    const totalLitres = data.reduce((total,curr)=>{
                        return total = total + curr.quantity;
                    },0)
                    console.log(totalLitres);
                    setLitres(totalLitres);
                } else {
                    setLitres(0); 
                }
            }
            catch(err){
                setLitres(0);
            }
        }
        todaysCollection();
    },[])
    return <h1>{litres}L</h1>;
}

export default TodaysCollection;

