import React from "react";
import CustomTooltip from "./CustomTooltip";
import{
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart
} from "recharts";
const CustomLineChart = ({data}) => {

    
return (
<div className="bg-white">
        <ResponsiveContainer width ="100%" height={300}>
            < AreaChart data = {data}>
                <defs>
                <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#875cf5" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#875cf5" stopOpacity={0}/>
                </linearGradient>
                </defs>
            <CartesianGrid stroke="none"/> 
                <XAxis dataKey="month" tick = {{ fontSize:12, fill:"#555"}}  stroke="none"/>
                <YAxis tick={{fontSize:12,fill:"#555"}} stroke="none"/>  
                <Tooltip content ={<CustomTooltip/>}  />

            <Area type = "monotone"dataKey="amount" stroke="#875cf5" fill="url(#incomeGradient)" strokeWidth={3} dot={{ r:3,fill:"#ab8df8"}}/>
            </AreaChart>
        </ResponsiveContainer>
</div>
);
};
export default CustomLineChart;