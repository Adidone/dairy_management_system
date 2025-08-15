import { useEffect, useState } from "react";


const TodaysCollection = ()=>{
    const[litres,setLitres] = useState(0);  
    const [loading, setLoading] = useState(true); 
   
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
                    // console.log(totalLitres);
                    setLitres(totalLitres);
                    setLoading(false);
                } else {
                    setLitres(0);
                    setLoading(false); 
                }
            }
            catch(err){
                setLitres(0);
                setLoading(false);
            }
        }
        todaysCollection();
    },[])
    if(loading){
        return <div className="spinner-4"></div>
    }
    return <h1>{litres}L</h1>;
}

export default TodaysCollection;

