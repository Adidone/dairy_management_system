import { useEffect, useState } from "react";
import { data } from "react-router-dom";

const TopMilkSellers = () => {

    const [seller, setSeller] = useState([]);

    useEffect(() => {
        const topSellers = async () => {
            try {
                const res = await fetch("http://localhost:5555/milk/topsellers");
                const result = await res.json();
                const { sucess, data } = result;
                if (sucess) {
                    // console.log(data)
                    setSeller(data);
                    
                } else {
                    console.error("Failed to fetch top milk sellers");
                }
            }
            catch (err) {
                console.error("Error fetching top milk sellers:", err);
            }

        }
        topSellers();
    }, [])

    return (
        <>
            {seller.map((item, index) => (
                <div className="seller name" key={index}>
                    <p>{item.custID}</p>
                    <p>{item.name}</p>
                    <p>{item.quantity}L</p>
                </div>
            ))}
        </>
    )
}

export default TopMilkSellers;
