import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";
const COLORS = ["#22c55e","#FA2C37","#ffd31d"];

const FinanceOverview =({totalBalance,totalIncome,totalExpense}) =>{
    const balanceData = [
        {name : "Total Balance",amount:totalBalance},
        {name : "Total Expense",amount:totalExpense},
        {name : "Total Income",amount:totalIncome},
    ];
    return(
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg text-green-700 font-bold">Financial Overview</h5>
                </div>

                <CustomPieChart
                data={balanceData}
                label="Total Balance"
                totalAmount={`₹${totalBalance}`}    
                colors={COLORS}
                showTestAnchor
                />
            
        </div>
    );
};
export default FinanceOverview;