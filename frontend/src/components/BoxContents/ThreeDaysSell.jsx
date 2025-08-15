import { useEffect, useState } from "react";

const ThreeDaysSell = () => {
    const [d1, setD1] = useState("YYYY-MM-DD")
    const [d2, setD2] = useState("YYYY-MM-DD")
    const [d3, setD3] = useState("YYYY-MM-DD")
    const [s1, setS1] = useState(0);
    const [s2, setS2] = useState(0);
    const [s3, setS3] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const threeDaysSell = async () => {
            try {
                const res = await fetch("http://localhost:5555/milk/threedayssell");
                const result = await res.json();
                console.log(result)
                const { sucess, day1, day2, day3, sell1, sell2, sell3 } = result;
                if (sucess) {
                    // console.log(day1, day2)
                    setD1(day1);
                    setD2(day2);
                    setD3(day3);
                    setS1(sell1);
                    setS2(sell2);
                    setS3(sell3);
                    setLoading(false);
                }
                else {
                    setD1(day1);
                    setD2(day2);
                    setD3(day3);
                    setS1(sell1);
                    setS2(sell2);
                    setS3(sell3);
                    console.log("error");
                    setLoading(false)
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        threeDaysSell();
    }, []);

    if (loading) {
        return <div className="spinner-3"></div>
    }
    else {
        return <>
            <div className="day">
                <p>{d1}</p>
                <p>{s1}L</p>
            </div>
            <div className="day">
                <p>{d2}</p>
                <p>{s2}L</p>
            </div>
            <div className="day">
                <p>{d3}</p>
                <p>{s3}L</p>
            </div>
        </>
    }


}

export default ThreeDaysSell;