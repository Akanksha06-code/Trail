import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../Charts/CustomBarChart";
import {prepareSubscriptionBarChartData} from "../../utils/helper"

const SubscriptionOverview = ({transactions,onAddSubscription}) => {
    const[chartData,setChartData] = useState([])

    useEffect(() => {
        const result = prepareSubscriptionBarChartData(transactions);
        setChartData(result);

        return() => {};
    } ,[transactions]);

    return <div className="card">
        <div className="flex items-center justify-between">
            <div className="">
                <h5 className="text-lg text-green-600 font-bold">Subscription Overview</h5>
                <p className="text-sm text-yellow-400 mt-0.5">  
                    Track your subscriptions over time.
                </p>
    </div>

    <button className="add-btn" onClick={onAddSubscription}>
        <LuPlus className="text-lg"/>
        Add Subscription
    </button>
    </div>
    <div className="mt-10">
        <CustomBarChart data ={chartData}/>

    </div>
</div>
};
export default SubscriptionOverview;