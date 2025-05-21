import React, { useState,useEffect } from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS =["#22c55e","#FA2C37","#ffd31d","#00BFFF"];

const RecentIncomeWithChart = ({data,totalIncome}) => {


    const [chartData, setChartData] = useState([]);

    const prepareChartData = () =>{
        const dataArr = data?.map((item) => ({
            name: item?.source,
            amount : item?.amount,
        }));

        setChartData(dataArr);
    };

    useEffect(() => {
        prepareChartData();

        return() => {};
    },[data]);

    return(
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg text-green-700 font-bold"> Last 60 Days Income</h5>
            </div>
        <CustomPieChart
            data={chartData}
            label="Total Income"
            totalAmount={`₹${totalIncome}`}
            showTestAnchor
            colors={COLORS}
        />
        </div>
    )
};
export default RecentIncomeWithChart;