import ThreeDaysSell from "../BoxContents/ThreeDaysSell"
import TodaysCollection from "../BoxContents/TodaysCollection"
import TopEmployees from "../BoxContents/TopEmployee"
import TopMilkSellers from "../BoxContents/TopMilkSellers"

const DashBaord = () => {
    return (
        <>
            <div className="frow">
                <div className="box1">
                    <p className="box1-title">TOP MILK SELLERS</p>
                    <div className="sellers">
                        <TopMilkSellers />
                    </div>
                </div>
                <div className="box2">
                    <p className="box1-title">TOP EMPLOYEE</p>
                    <div className="sellers">
                        <TopEmployees />
                    </div>
                </div>
            </div>
            <div className="srow">
                <div className="small1">
                    <p className="box1-title">LAST 3 DAYS SELL</p>
                    <div className="days">
                        <ThreeDaysSell />
                    </div>
                </div>
                <div className="small2">
                    <p className="box1-title">CURRENT MILK RATES</p>
                    <div className="day ">
                        <p className="stock1">COW</p>
                        <p>45 Rs/L</p>
                    </div>
                    <div className="day stock2">
                        <p className="stock1">BUFFALO</p>
                        <p>68 Rs/L</p>
                    </div>
                </div>
                <div className="small3">
                    <p>TODAYS</p>
                    <p>COLLECTION</p>
                    <TodaysCollection />
                </div>
            </div>
        </>
    )
}

export default DashBaord