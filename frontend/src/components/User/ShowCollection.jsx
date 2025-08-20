
import { useEffect } from "react";
import { useState } from "react";

const ShowCollection = () => {

    const [collection, setCollection] = useState([]);


    useEffect(() => {

        const getCollection = async () => {
            try {
                const res = await fetch("http://localhost:5555/milk/showbycust", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        custID: localStorage.getItem("custID"),
                    }),
                });

                const result = await res.json();
                if (result) {
                    console.log(result);
                }

                const { sucess, data } = result;
                if (sucess) {
                    setCollection(data);
                }
                else {
                    console.log("error in fetching Farmers");
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        getCollection();
    }, []);



    return (
        <div className="table" style={{width:"97%",marginLeft:"14px",marginBottom:"14px"}}>
            <table>
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>QUANTITY</th>
                        <th>FAT</th>
                        <th>SNF</th>
                        <th>BILL</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {collection.map((col, index) => (
                        <tr key={index}>
                            <td>{col.date}</td>
                            <td>{col.quantity}</td>
                            <td>{col.fat}</td>
                            <td>{col.snf}</td>
                            <td>{col.bill}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowCollection;